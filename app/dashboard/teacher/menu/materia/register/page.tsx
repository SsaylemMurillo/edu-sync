import Logo from '@/app/components/Logo'
import React, { useState } from 'react'
function RegistrarMateria() {

    return (

        <body className="">
            <form>
                <div className="container mx-auto my-6">
                    <div className="flex justify-center px-6 my-12 ">
                        <div className="w-full xl:w-3/4 lg:w-max flex border-2 rounded-lg border-primary">

                            <div className="w-16 h-30 bg-yellow-500 lg:w-5/12 items-center lg:flex inline-grid shadow-2xl rounded-xl justify-center hidden">
                                <div className='inline-flex mb-6'>
                                    <div className={`bg-white rounded-full p-3 bg-center shadow-lg w-10 cursor-pointer 
                        block float-left ${!open && "p-3 object-cover"}`} src={Logo} alt="Logo" style={{ width: '90px', height: '90px' }}>
                                        <Logo />
                                    </div>
                                    <h1 className={`text-white origin-left font-medium uppercase text-2xl mt-6 ml-3 ${!open && "scale-0"}`}>EduSync</h1>
                                </div>
                                <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none border-primary">
                                    <h3 className="pt-4 text-4xl text-center text-ternary font-bold">Registrar Materia</h3>
                                    <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                        <div className="mb-4 md:flex md:justify-between">

                                            <div className="mb-4 md:mr-4 md:mb-0">
                                                <label className="block mb-2 text-sm font-bold text-gray-700">
                                                    Codigo de la Materia
                                                </label>
                                                <input
                                                    className="w-full px-3 py-2 text-sm leading-tight border-ternary text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="CodigoMateria"
                                                    type="text"
                                                    placeholder="Codigo Materia"
                                                />
                                            </div>
                                            <div className="mb-4 md:mr-2 md:mb-0">
                                                <label className="block mb-2 text-sm font-bold text-gray-700">
                                                    Nombre Materia
                                                </label>
                                                <input
                                                    className="w-full px-3 py-2 text-sm leading-tight border-ternary text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="nombreMateria"
                                                    type="text"
                                                    placeholder="Nombre Materia"
                                                />
                                            </div>

                                        </div>
                                        <div className="mb-4 md:flex md:justify-between">

                                            <div className="mb-4 md:mr-4 md:mb-0">
                                                <label className="block mb-2 text-sm font-bold text-gray-700">
                                                    Cedula del Docente
                                                </label>
                                                <input
                                                    className="w-32 px-3 py-2 text-sm leading-tight border-ternary text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="ccDocente"
                                                    type="text"
                                                    placeholder="Cedula Docente"
                                                />
                                            </div>
                                            <div className="mb-4 md:mr-2 md:mb-0">
                                                <label className="block mb-2 text-sm font-bold text-gray-700">
                                                    Primer Nombre
                                                </label>
                                                <input
                                                    className="w-32  px-3 py-2 text-sm leading-tight border-ternary text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="primerNombre"
                                                    type="text"
                                                    placeholder="Primer Nombre"
                                                />
                                            </div>
                                            <div className="mb-4 md:mr-2 md:mb-0">
                                                <label className="block mb-2 text-sm font-bold text-gray-700">
                                                    Primer Apellido
                                                </label>
                                                <input
                                                    className="w-40 px-3 py-2 text-sm leading-tight border-ternary text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="primerApellido"
                                                    type="text"
                                                    placeholder="Primer Apellido"
                                                />
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                        </div>
                                        <div className="mb-4 md:flex md:justify-between">
                                            <div className="mb-4 md:mr-2 md:mb-0">
                                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="genero">
                                                    Grupo
                                                </label>
                                                <select
                                                    className="w-24 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-ternary rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="grupo"
                                                >
                                                    <option value="" disabled>
                                                        Selecciona
                                                    </option>
                                                    <option value="M">01</option>
                                                    <option value="F">02</option>
                                                    <option value="agregar_otro">Agregar Otro Grupo</option>
                                                </select>
                                            </div>
                                            <div className="mb-4 md:mr-2 md:mb-0">
                                                <label className="block mb-2 text-sm font-bold text-gray-700">
                                                    Horario Inicio
                                                </label>
                                                <input
                                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-ternary rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="h_inicial"
                                                    type="time"
                                                    placeholder="0"
                                                />
                                            </div>
                                            <div className="mb-4 md:mr-2 md:mb-0">
                                                <label className="block mb-2 text-sm font-bold text-gray-700" >
                                                    Horario Final
                                                </label>
                                                <input
                                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-ternary rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="h_final"
                                                    type="time"
                                                    placeholder="0"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-6 text-center">
                                            <button
                                                className="w-full px-4 py-2 font-bold text-white bg-primary rounded-full hover:bg-ternary focus:outline-none focus:shadow-outline"
                                                type="submit"
                                            >
                                                Registrar Materia
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </body>
    )
}

export default RegistrarMateria
