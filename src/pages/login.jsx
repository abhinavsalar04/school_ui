import React, { useRef } from 'react';

const Login = () => {
  const formRef = useRef();

  async function submithandler(){
    try{
      const email = await formRef.current.email.value;
      const password = await formRef.current.password.value;
      console.log("email: ", email, " password: ", password);
     console.log(formRef.current.reset());
     formRef.current.reset();
    } catch (error) {
      console.log("Error: ", error);
    }
  }
  return (
    <div className='my-6 flex justify-end'>
      <div className='w-[25%] border border-cyan-400 rounded-md mr-4'>
        <div className='bg-cyan-400 flex flex-col justify-center items-center py-2'>
          <img className='w-5 h-5' src="../../public/userIcon.png" alt="user-icon"></img>
          <span className='text-white font-bold'>Sign In</span>
        </div>
        <form ref={formRef} onSubmit={(e) => {e.preventDefault()}} className='flex flex-col bg-gray-200 pb-5 pt-6 gap-6 px-6 rounded-bl-md rounded-br-md'>
          <input name="email" className='px-3 py-3 rounded-md focus:outline-gray-400' placeholder='Email' type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required></input>
          <input name="password" className='px-3 py-3 rounded-md focus:outline-gray-400' placeholder='Password' type="password"></input>
          <button onClick={submithandler} type="submit" className='font-semibold text-white bg-cyan-400 px-2 py-2 rounded-lg'>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
