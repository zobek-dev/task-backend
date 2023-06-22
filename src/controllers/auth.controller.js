import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req,res)=> {
  const { username, email, password } = req.body
  try{
    const hashedPassword = await bcrypt.hash(password,10)

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    })

    const savedUser = await newUser.save()

    jwt.sign(
      {
        id: savedUser._id,
      },
      'secret123',
      {
        expiresIn: '1d'
      },
      (err, token) => {
        if(err) console.log(err)
        res.cookie('toke', token)
        res.json({
          message: 'User created successfully'
        })
      }
    )

  }catch(error){
    console.log(error)
  }
}

export const login = (req,res)=> {res.send('login')}