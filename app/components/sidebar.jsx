
'use client';

import React, { useState } from 'react';
import { BsArrowLeftCircle, BsChevronDown, BsNut, BsSearch } from 'react-icons/bs';
import { HiMiniHome } from "react-icons/hi2";
import { HiMiniUser } from "react-icons/hi2";
import { BiBookBookmark, BiHome, BiLogOut, BiUser } from "react-icons/bi";
import { RiSearch2Fill } from "react-icons/ri";
import { PiStudentDuotone } from "react-icons/pi";
import { BsPersonCheck } from "react-icons/bs";
import { FiClipboard } from "react-icons/fi";
import { RiListSettingsLine } from "react-icons/ri";
import { RiSettings3Fill } from "react-icons/ri";
import { PiSignOutBold } from "react-icons/pi";
import Logo from './Logo';
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from '../config/firebaseconfig';

function  SidebarProfesor (){
    const [open, setOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
     const router = useRouter();


    const PageMateria = async () => {
        router.push(`/dashboard/teacher/menu/materia/register`);
    }

    const LogOut = async () => {
        signOut(auth).then(() => {
          console.log("Sign-out successful");
          router.push(`/`);
        }).catch((error) => {
          console.log("An error happened");
        });
      }


    return (
        <div className='flex h-full'>
            <div className=''>
                <div className={`bg-yellow-400 h-full p-2 text-secondary pt-5 shadow-lg shadow-yellow-800 relative duration-300
                 ${open ? "w-72" : "w-28"}`}>
                    <BsArrowLeftCircle className={`bg-white text-ternary text-4xl cursor-pointer rounded-full absolute -right-5 top-3
                    ${!open && "rotate-180"}`}
                        onClick={() => setOpen(!open)} />
                    <div className='inline-flex mb-6'>
                        <div className={`bg-white rounded-full p-3 bg-center shadow-lg w-10 cursor-default 
                        block float-left ${!open && "p-3 object-cover"}`} src={Logo} alt="Logo" style={{ width: '90px', height: '90px' }}>
                            <Logo/>
                        </div>
                        <h1 className={`text-white origin-left font-medium uppercase text-2xl mt-6 ml-3 hover:cursor-default ${!open && "scale-0"}`}>EduSync</h1>
                    </div>

                    <div className={`flex items-center rounded-md bg-ternary/50 py-2 px-4 ${!open ? "px-3" : "px-4"}`}>
                        <RiSearch2Fill className={`text-white text-xl block float-left cursor-pointer mr-3 duration-300 ${!open && "ml-5 duration-300 "}`} />
                        <input type='text' placeholder='Buscar...' className={`text-l bg-transparent w-full focus:outline-none 
                        focus:font-semibold
                        text-white placeholder-gray-100
                     ${!open && "hidden"}`} />
                    </div>

                    <ul className='pt-1 '>
                        <li className={`text-white text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/50 rounded-md mt-1 hover:cursor-pointer`} >
                            <span className={`text-2xl block float-left duration-300 ${!open && "ml-5 duration-300"}`}> <HiMiniHome /> </span>
                            <span className={`text-base font-semibold flex-1 ${!open && "hidden"}`}
                            >Home</span>
                        </li>
                        <li className={`text-white text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/50 rounded-md mt-1  border-b-2 border-b-terneray hover:cursor-pointer`}>
                            <span className={`text-2xl block float-left duration-300 ${!open && "pl-4 duration-300"}`}> <HiMiniUser /> </span>
                            <span className={`text-base font-semibold flex-1 ${!open && "hidden"}`}
                            >Perfil</span>
                        </li>

                        <li className={`text-white text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/50 rounded-md mt-3 hover:cursor-pointer`} onClick={() => setSubMenuOpen(!subMenuOpen)}>
                            <span className={`text-2xl block float-left duration-300 ${!open && "pl-4 duration-300"}`}> <RiListSettingsLine  /> </span>
                            <span className={`text-base font-semibold flex-1 ${!open && "hidden"}`}>Gestionar</span>
                            <span className={`${!open && "hpver:duration-300"}`}><BsChevronDown /></span>

                        </li>
                        {
                            subMenuOpen && (
                                <ul>
                                    <li className={`text-white text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/50 
                                rounded-md mt-1 hover:cursor-pointer`} onClick={PageMateria}>
                                        <span className={`text-xl ml-4 block float-left duration-300 ${!open && "pl-4 duration-300"}`}> <BiBookBookmark /> </span>
                                        <span className={`text-ls font-semibold flex-1 ${!open && "hidden"} `}
                                        >Materias</span>

                                    </li>
                                    <li className={`text-white text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/50 
                                rounded-md mt-1 hover:cursor-pointer`}>
                                        <span className={`text-xl ml-4 block float-left duration-300 ${!open && "pl-4 duration-300"}`}> <PiStudentDuotone /> </span>
                                        <span className={`text-ls font-semibold flex-1 ${!open && "hidden"}`} >Estudiantes</span>
                                    </li>
                                    <li className={`text-white text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/50 
                                rounded-md mt-1 hover:cursor-pointer`}>
                                        <span className={`text-xl ml-4 block float-left duration-300 ${!open && "pl-4 duration-300"}`}> <BsPersonCheck /> </span>
                                        <span className={`text-ls font-semibold flex-1 ${!open && "hidden"} `} >Asistencia</span>
                                    </li>
                                    <li className={`text-white text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/50 
                                rounded-md mt-1 hover:cursor-pointer`}>
                                        <span className={`text-xl ml-4 block float-left duration-300 ${!open && "pl-4 duration-300"}`}> <FiClipboard /> </span>
                                        <span className={`text-ls font-semibold flex-1 ${!open && "hidden"}`} >Actividades</span>
                                    </li>

                                </ul>

                            )
                        }


                        <li className={`text-white text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/50 rounded-md mt-3 hover:cursor-pointer`}>
                            <span className={`text-2xl block float-left duration-300 ${!open && "pl-4 duration-300"}`}> <RiSettings3Fill  /> </span>
                            <span className={`text-base font-semibold flex-1 ${!open && "hidden"}`}>Configurar</span>
                        </li>
                        <li className={`text-white text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/50 rounded-md mt-2 hover:cursor-pointer`} onClick={LogOut}>
                            <span className={`text-2xl block float-left duration-300 ${!open && "pl-4 duration-300"}`}> <PiSignOutBold /> </span>
                            <span className={`text-base font-semibold flex-1 ${!open && "hidden"}`}
                            >Salir</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SidebarProfesor;