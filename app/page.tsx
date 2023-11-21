'use client';

import { useState } from "react";

export default function Home() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
        <div className='mb-4'>
          <label className='font-medium text-justify text-l mb-1 flex'>Correo Electronico</label>
          <input id='email' value={email} required type='email' onChange={(e) => {setEmail(e.target.value)}} placeholder='Escriba su Correo Electronico' className='w-full border rounded-md bg-transparent border-gray-400 p-2.5' />
        </div>
        <div className='mb-4'>
          <label className='font-medium text-justify text-l mb-1 flex'>Contraseña</label>
          <input id='password' value={password} onChange={(e) => {setPassword(e.target.value)}}  required type='password' placeholder='Escriba su Contraseña' className='w-full border rounded-md bg-transparent border-gray-400 p-2.5' />
        </div>

        <div className="mt-5 flex flex-col gap-y-5">
          <button type='submit'
            className="hover:bg-yellow-600 transition-all py-3 rounded-md bg-yellow-500 text-white text-l font-semibold">
            Iniciar Sesion </button>
        </div>
      </div>
  )
}
