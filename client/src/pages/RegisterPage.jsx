import { useForm } from 'react-hook-form'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function RegisterPage(){

  const { register, handleSubmit, formState: { errors } } = useForm()
  const { signup, isAuthenticated, errors: registerErrors} = useAuth()
  const navigate = useNavigate()

  useEffect(()=> {
    if(isAuthenticated) navigate('/tasks')
  },[isAuthenticated])

  console.log(registerErrors)
  return(
    
    <div className="bg-zinc-800 text-white p-10 rounded-md max-w-md mx-auto [&>form>input]:bg-zinc-600 [&>form>input]:placeholder:text-white [&>form>input]:text-white [&>form>input]:rounded-sm [&>form>input]:my-4 [&>form>input]:block [&>form>input]:w-full [&>form>input]:p-2">
      <form onSubmit={handleSubmit(async (values) => {
        signup(values)
      })}>
        {
          registerErrors 
          && 
          <div className="bg-red-600 text-white p-2 rounded-sm">{registerErrors.message}</div>
        }
        <input 
          type="text" 
          {
            ...register('username', 
            {required: true})
          }
          placeholder="Username"
        />
        {errors.username && (
          <p className="text-red-500">Username is required</p>
        )}
        <input 
          type="email" 
          {
            ...register('email', 
            {required: true})
          }
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-500">Email is required</p>
        )}
        <input
          type="password" 
          {
            ...register('password', 
            {required: true})
          }
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500">Password is required</p>
        )}
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default RegisterPage