'use client';

import { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../edu-sync/app/config/firebaseconfig"

import { saveUser } from "../../edu-sync/app/data/firestoredata"

import { useRouter } from "next/navigation";
import React from "react";
import Logo from "./components/Logo";

export default function Home() {
  const [loggedUser, setLoggedUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  if (loggedUser != '') {
    router.push(`/dashboard/${loggedUser}`);
  }

  const LogIn = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoggedUser(user.uid);
        saveUser(user.uid);
        console.log(loggedUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  const LogOut = async () => {
    signOut(auth).then(() => {
      console.log("Sign-out successful");
    }).catch((error) => {
      console.log("An error happened");
    });
  }

  return (

    <div className='flex flex-col flex-auto w-full h-screen'>
      <div className="h-full">
        <div className="grid lg:grid-cols-3 h-full">
          <div className="bg-yellow-500 items-center lg:flex inline-grid shadow-2xl rounded-xl justify-center hidden">
            <div className="bg-white rounded-full p-10 bg-center shadow-lg shadow-yellow-800/50 ">
              <Logo />
            </div>
          </div>
          <div className="col-span-2 flex justify-center items-center">
            <div className="min-w-[450] px-8">
              <div className="mb-8">
                <h1 className="text-3xl font-bold">Bienvenido a EduSync</h1>
                <p className="text-xl">Por favor, digite los datos necesarios para iniciar sesión</p><br />
                <div>
                  <div className='mb-4'>
                    <label className='font-medium text-justify text-l mb-1 flex'>Correo Electronico</label>
                    <input id='email' value={email} required type='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='Escriba su Correo Electronico' className='w-full border rounded-md bg-transparent border-gray-400 p-2.5' />
                  </div>
                  <div className='mb-4'>
                    <label className='font-medium text-justify text-l mb-1 flex'>Contraseña</label>
                    <input id='password' value={password} onChange={(e) => { setPassword(e.target.value) }} required type='password' placeholder='Escriba su Contraseña' className='w-full border rounded-md bg-transparent border-gray-400 p-2.5' />
                  </div>

                  <div className="mt-5 flex flex-col gap-y-5">
                    <button type='submit'
                      onClick={LogIn}
                      className="hover:bg-yellow-600 transition-all py-3 rounded-md bg-yellow-500 text-white text-l font-semibold">
                      Iniciar Sesion</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
