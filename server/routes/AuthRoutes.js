import express from "express"
import User from "../models/User.js";
import bcrypt from "bcrypt";

const authRoutes = express.Router();

//Registering a user
authRoutes.post('/register', async (req,res) => {
    const {email, password} = req.body;

    try {
        const existing = await User.findOne({email});
        if(existing){
            return res.status(400).json({message: 'Email already in use!'})
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({email, hashedPassword});

        res.status(201).json({message: 'User Registered!', user})

    }catch(err){    
        res.status(500).json({message: 'Registration failed!', error: err.message})
    }
})

//Login
authRoutes.post('/login', async (req,res) => {
    const {email, password} = req.body;

    try {
        const user =  await User.findOne({ email });
        if(!user) {
            return res.status(400).json({message: 'Invalid credentials!'})
        }

        const match = await bcrypt.compare(password, user.hashedPassword);
        if(!match) {
            return res.status(400).json({message: 'Invalid credentials!'})
        }

        res.status(200).json({message: 'Login successful!', user})
    } catch(err){
    console.log(err);}
})

export default authRoutes;