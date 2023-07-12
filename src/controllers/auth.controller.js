import User from '../models/user.model.js'
import { createAccessToken } from '../libs/jwt.js'

import bcrypt from 'bcryptjs'

export const register = async (req,res)=> {
  const { username, email, password } = req.body

  try{
    const userFound = await User.findOne({email})

    if(userFound) return res.status(400).json({message:'The email is already in use'})

    const hashedPassword = await bcrypt.hash(password,10)

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    })

    const savedUser = await newUser.save()
    const token = await createAccessToken({id: savedUser._id})

    res.cookie('token', token)
    res.json({ 
      message: 'User Created succesfully',
      username: savedUser.username,
      eamil: savedUser.email,
      createdAt: savedUser.createdAt,
      updatedAt: savedUser.updatedAt,
    }) 
  }catch(error){
    console.log(error)
  }
}

export const login = async (req,res)=> {
  const { email, password } = req.body

  try{
    const userFound = await User.findOne({ email })

    if(!userFound) return res.status(400).json({ message: 'User not found'})

    const isMatch = await bcrypt.compare(password, userFound.password)

    if(!isMatch) return res.status(400).json({ message: 'Incorrect password'})

    const token = await createAccessToken({id: userFound._id})

    res.cookie('token', token)
    res.json({
      message: 'User Logged',
      username: userFound.username,
      email: userFound.email,
      createdAt:  userFound.createdAt,
      updatedAt: userFound.updatedAt,
    })

  }catch(err){
    console.log(err)
  }
}

export const logout = (req, res) => {
  res.cookie('token', '', {
    expires: new Date(0)
  })
  return res.sendStatus(200)
}

export const profile = async (req, res) => {
  const userFounded = await User.findById(req.user.id)
  if(!userFounded) return res.status(400).json({ message: 'User not found' })

  return res.json({
    id: userFounded._id,
    username: userFounded.username,
    email: userFounded.email,
    createdAt: userFounded.createdAt,
    updatedAt: userFounded.updatedAt
  })
}












