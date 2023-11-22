import Logo from '@/app/components/Logo'
import React, { useState } from 'react'

function RegistrarMateria() {

    // Hacer la función para obtener los datos del formulario
    
    // Llamar a la función para agregar la materia en base de datos: Firebase

    // Terminar esta mondá


    return (
        <div className="flex flex-col w-full p-5 items-center h-auto">
            <h3 className="pt-4 text-4xl text-center text-ternary font-bold">Registrar Materia</h3>
            <div className="mt-4 flex flex-col items-center lg:w-1/4 md:w-3/6 sm:w-full"></div>
                <label className="text-sm pb-2 font-bold text-gray-700">
                    Codigo de la Materia
                </label>
                <input
                    className="w-full px-3 py-2 text-sm border-ternary text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="codigoMateria"
                    type="text"
                    placeholder="Codigo Materia"
                />

                <label className="block mb-2 mt-4 text-sm font-bold text-gray-700">
                    Nombre Materia
                </label>
                <input
                    className="w-full px-3 py-2 text-sm leading-tight border-ternary text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="nombreMateria"
                    type="text"
                    placeholder="Nombre Materia"
                />

                <label className="block mb-2 mt-4 text-sm font-bold text-gray-700">
                    Cedula del Docente
                </label>
                <input
                    className="w-full px-3 py-2 text-sm leading-tight border-ternary text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="ccDocente"
                    type="text"
                    placeholder="Cedula Docente"
                />

                <label className="block mb-2 mt-4 text-sm font-bold text-gray-700">
                    Primer Nombre
                </label>
                <input
                    className="w-full px-3 py-2 text-sm leading-tight border-ternary text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="primerNombre"
                    type="text"
                    placeholder="Primer Nombre"
                />

                <label className="block mb-2 mt-4 text-sm font-bold text-gray-700">
                    Primer Apellido
                </label>
                <input
                    className="w-full px-3 py-2 text-sm leading-tight border-ternary text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Primer Apellido"
                />

                <label className="block mb-2 mt-4 text-sm font-bold text-gray-700" htmlFor="genero">
                    Grupo
                </label>
                <select
                    className="w-full px-3 py-2 text-sm leading-tight border-ternary text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="grupo"
                >
                    <option value="" disabled>
                        Selecciona
                    </option>
                    <option value="M">01</option>
                    <option value="F">02</option>
                </select>

                <label className="block mb-2 mt-4 text-sm font-bold text-gray-700">
                    Horario Inicio
                </label>
                <input
                    className="w-full px-3 py-2 text-sm leading-tight border-ternary text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="h_inicial"
                    type="time"
                    placeholder="0"
                />

                <label className="block mb-2 mt-4 text-sm font-bold text-gray-700" >
                    Horario Final
                </label>
                <input
                    className="w-full px-3 py-2 text-sm leading-tight border-ternary text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="h_final"
                    type="time"
                    placeholder="0"
                />

                <button
                    className="w-full m-5 px-4 py-2 font-bold text-white bg-primary rounded hover:bg-ternary focus:outline-none focus:shadow-outline">
                    Registrar Materia
                </button>
            </div>
        </div>
    )
}

export default RegistrarMateria