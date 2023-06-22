import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../config.js'

export const createAccessToken = (payload) => {
  return new Promise((resolve, reject)=> {
    jwt.sign(
      payload,
      SECRET_KEY,
      {
        expiresIn: '1d'
      },
      (err,token)=> {
        if(err) reject(err)
        resolve(token)
      }
    )
  })
}


// jwt.sign(
//   {
//     id: savedUser._id,
//   },
//   'secret123',
//   {
//     expiresIn: '1d'
//   },
//   (err, token) => {
//     if(err) console.log(err)
//     res.cookie('toke', token)
//     res.json({
//       message: 'User created successfully'
//     })
//   }
// )