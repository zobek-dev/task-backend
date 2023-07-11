import { useForm } from 'react-hook-form'
import { registerRequest } from '../api/auth';

function RegisterPage(){

  const {register, handleSubmit} = useForm();
  return(
    <div className="bg-zinc-800 text-white p-10 rounded-md max-w-md mx-auto [&>form>input]:bg-zinc-600 [&>form>input]:placeholder:text-white [&>form>input]:text-white [&>form>input]:rounded-sm [&>form>input]:my-4 [&>form>input]:block [&>form>input]:w-full [&>form>input]:p-2">
      <form onSubmit={handleSubmit(async (values) => {
        const res = await registerRequest(values)
        console.log(res)
      })}>
        <input 
          type="text" 
          {
            ...register('username', 
            {required: true})
          }
        />
        <input 
          type="email" 
          {
            ...register('email', 
            {required: true})
          }
        />
        <input
          type="password" 
          {
            ...register('password', 
            {required: true})
          }
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default RegisterPage