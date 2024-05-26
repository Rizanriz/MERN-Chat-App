import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js"
import { json } from "express"

export const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body

        if (password != confirmPassword) {
            return res.status(400).json({ error: "password don't match" })
        }

        const user = await User.findOne({ username })
        if (user) {
            return res.status(400).json({ error: "username already exist" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const boyProfilPic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilPic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilPic : girlProfilPic
        })

        if (newUser) {
            generateTokenAndSetCookie(newUser._id,res)
            await newUser.save()

            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        } else {
            res.send(400).json({ error: "Invalid user data" })
        }

    } catch (error) {
        console.log("error in signup controller", error.message);
        res.status(500).json({ error: "Internel server error" })
    }
}

export const login = async(req, res) => { //to check if user exist
    try {
        const {username,password} = req.body;
        const user = await User.findOne({username})
        const isPasswordCorrect = await bcrypt.compare(password,user?.password || "")

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({error:"Invalid username or password"})
        }

        generateTokenAndSetCookie(user._id,res)

        res.status(200).json({
            _id:user._id,
            fullname:user.fullname,
            username:user.username,
            profilePic:user.profilePic
        })
    } catch (error) {
        console.log("error in login controller", error.message);
        res.status(500).json({ error: "Internel server error" })
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt","" ,{maxAge:0})
        res.status(200).json({message:"Logged out successfully"})
    } catch (error) {
        console.log("error in logout controller", error.message);
        res.status(500).json({ error: "Internel server error" })
    }
}