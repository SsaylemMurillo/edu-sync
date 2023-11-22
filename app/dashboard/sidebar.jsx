
'use client';

import React, { useState } from 'react';
import { BsArrowLeftCircle, BsChevronDown, BsNut, BsSearch } from 'react-icons/bs';
import { BiBookBookmark, BiHome, BiLogOut, BiUser } from "react-icons/bi";
import { PiStudentDuotone } from "react-icons/pi";
import { BsPersonCheck } from "react-icons/bs";
import { FiClipboard } from "react-icons/fi";
import Logo from '../components/Logo';

function  SidebarProfesor (){
    const [open, setOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    return (
        <div className='flex h-full'>
            <div className=''>
                <div className={`bg-yellow-400 h-full p-2 text-secondary pt-5 shadow-lg shadow-yellow-800 relative duration-300
                 ${open ? "w-72" : "w-28"}`}>
                    <BsArrowLeftCircle className={`bg-white text-ternary text-4xl cursor-pointer rounded-full absolute -right-5 top-3
                    ${!open && "rotate-180"}`}
                        onClick={() => setOpen(!open)} />
                    <div className='inline-flex mb-6'>
                        <div className={`bg-white rounded-full p-3 bg-center shadow-lg w-10 cursor-pointer 
                        block float-left ${!open && "p-3 object-cover"}`} src={Logo} alt="Logo" style={{ width: '90px', height: '90px' }}>
                            <Logo/>
                        </div>
                        <h1 className={`text-white origin-left font-medium uppercase text-2xl mt-6 ml-3 ${!open && "scale-0"}`}>EduSync </h1>
                    </div>

                    <div className={`flex items-center rounded-md bg-ternary/50 py-2 px-4 ${!open ? "px-3" : "px-4"}`}>
                        <BsSearch className={`text-white text-xl block float-left cursor-pointer mr-1 duration-300 ${!open && "ml-4 duration-300 "}`} />
                        <input type='text' placeholder='Buscar' className={`text-xl font-semibold bg-transparent w-full text-white focus:outline-none
                     ${!open && "hidden"}`} />
                    </div>

                    <ul className='pt-1 '>
                        <li className={`text-white text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/50 rounded-md mt-1`}>
                            <span className={`text-2xl block float-left duration-300 ${!open && "pl-4 duration-300"}`}> <BiHome /> </span>
                            <span className={`text-base font-semibold flex-1 ${!open && "hidden"}`}
                                
                            >Home</span>
                        </li>
                        <li className={`text-white text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/50 rounded-md mt-1  border-b-2 border-b-terneray`}>
                            <span className={`text-2xl block float-left duration-300 ${!open && "pl-4 duration-300"}`}> <BiUser /> </span>
                            <span className={`text-base font-semibold flex-1 ${!open && "hidden"}`}
                                
                            >Perfil</span>
                        </li>

                        <li className={`text-white text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/50 rounded-md mt-3`}>
                            <span className={`text-2xl block float-left duration-300 ${!open && "pl-4 duration-300"}`}> <BiHome /> </span>
                            <span className={`text-base font-semibold flex-1 ${!open && "hidden"}`}>Gestionar</span>
                            <span className={`${!open && "hpver:duration-300"}`}><BsChevronDown onClick={() => setSubMenuOpen(!subMenuOpen)} /></span>

                        </li>
                        {
                            subMenuOpen && (
                                <ul>
                                    <li className={`text-white text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/50 
                                rounded-md mt-1`}>
                                        <span className={`text-xl ml-4 block float-left duration-300 ${!open && "pl-4 duration-300"}`}> <BiBookBookmark /> </span>
                                        <span className={`text-ls font-semibold flex-1 ${!open && "hidden"} `}
                                           >Materias</span>

                                    </li>
                                    <li className={`text-white text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/50 
                                rounded-md mt-1`}>
                                        <span className={`text-xl ml-4 block float-left duration-300 ${!open && "pl-4 duration-300"}`}> <PiStudentDuotone /> </span>
                                        <span className={`text-ls font-semibold flex-1 ${!open && "hidden"}`} >Estudiantes</span>
                                    </li>
                                    <li className={`text-white text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/50 
                                rounded-md mt-1`}>
                                        <span className={`text-xl ml-4 block float-left duration-300 ${!open && "pl-4 duration-300"}`}> <BsPersonCheck /> </span>
                                        <span className={`text-ls font-semibold flex-1 ${!open && "hidden"} `} >Asistencia</span>
                                    </li>
                                    <li className={`text-white text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/50 
                                rounded-md mt-1`}>
                                        <span className={`text-xl ml-4 block float-left duration-300 ${!open && "pl-4 duration-300"}`}> <FiClipboard /> </span>
                                        <span className={`text-ls font-semibold flex-1 ${!open && "hidden"}`} >Actividades</span>
                                    </li>

                                </ul>

                            )
                        }


                        <li className={`text-white text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/50 rounded-md mt-3`}>
                            <span className={`text-2xl block float-left duration-300 ${!open && "pl-4 duration-300"}`}> <BsNut /> </span>
                            <span className={`text-base font-semibold flex-1 ${!open && "hidden"}`}>Configurar</span>
                        </li>
                        <li className={`text-white text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/50 rounded-md mt-2`}>
                            <span className={`text-2xl block float-left duration-300 ${!open && "pl-4 duration-300"}`}> <BiLogOut /> </span>
                            <span className={`text-base font-semibold flex-1 ${!open && "hidden"}`}>Salir</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SidebarProfesor;