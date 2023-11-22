'use client';
import Logo from '@/app/components/Logo'
import React, { useState } from 'react'
import Subject from '../../../../../entity/Subject'
import { saveSubject } from '@/app/data/firestoredata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';

function RegistrarMateria() {

    const [isLoading, setIsLoading] = useState(false);
    const [subjectCode, setSubjectCode] = useState('');
    const [subjectName, setSubjectName] = useState('');
    const [teacherCC, setTeacherCC] = useState('');
    const [teacherFirstName, setTeacherFirstName] = useState('');
    const [teacherSecondName, setTeacherSecondName] = useState('');
    const [subjectGroup, setSubjectGroup] = useState('M');
    const [initialH, setinitialH] = useState('');
    const [finalH, setFinalH] = useState('');

    function ValidateData() {
        setIsLoading(true);
        if (subjectCode != '' && subjectName != '' && teacherCC != '' && teacherFirstName != '' && teacherSecondName != '' && subjectGroup != '' && subjectGroup != '' && initialH != '' && finalH != '') {
            return true;
        }
        return false;
    }

    const SendAndSaveSubject = async () => {
        if (ValidateData()) {
            const subject = new Subject(subjectCode, subjectName, teacherCC, teacherFirstName, teacherSecondName, subjectGroup, initialH, finalH);
            // after created send to database
            saveSubject(subject);
            //
        } else {
            alert("Por favor completa los datos requeridos");
        }
        setIsLoading(false);
    }

    return (
        <div className="w-full flex flex-col p-5 justify-center items-center">
            <h3 className="pt-4 text-4xl text-center text-ternary font-bold">Registrar Materia</h3>
            <div className="mt-4 lg:w-90"></div>
            <label className="text-sm pb-2 font-bold text-gray-700">
                Codigo de la Materia
            </label>
            <input
                className="w-full md:w-1/2 lg:w-3/6 xl:w-1/4 px-3 py-2 text-sm border-ternary text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="codigoMateria"
                type="text"
                placeholder="Codigo Materia"
                value={subjectCode} onChange={(e) => { setSubjectCode(e.target.value) }}
            />

            <label className="block mb-2 mt-4 text-sm font-bold text-gray-700">
                Nombre Materia
            </label>
            <input
                className="w-full md:w-1/2 lg:w-3/6 xl:w-1/4 px-3 py-2 text-sm leading-tight border-ternary text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="nombreMateria"
                type="text"
                placeholder="Nombre Materia"
                value={subjectName} onChange={(e) => { setSubjectName(e.target.value) }}
            />

            <label className="block mb-2 mt-4 text-sm font-bold text-gray-700">
                Cedula del Docente
            </label>
            <input
                className="w-full md:w-1/2 lg:w-3/6 xl:w-1/4 px-3 py-2 text-sm leading-tight border-ternary text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="ccDocente"
                type="text"
                placeholder="Cedula Docente"
                value={teacherCC} onChange={(e) => { setTeacherCC(e.target.value) }}
            />

            <label className="block mb-2 mt-4 text-sm font-bold text-gray-700">
                Primer Nombre
            </label>
            <input
                className="w-full md:w-1/2 lg:w-3/6 xl:w-1/4 px-3 py-2 text-sm leading-tight border-ternary text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="primerNombre"
                type="text"
                placeholder="Primer Nombre"
                value={teacherFirstName} onChange={(e) => { setTeacherFirstName(e.target.value) }}
            />

            <label className="block mb-2 mt-4 text-sm font-bold text-gray-700">
                Primer Apellido
            </label>
            <input
                className="w-full md:w-1/2 lg:w-3/6 xl:w-1/4 px-3 py-2 text-sm leading-tight border-ternary text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Primer Apellido"
                value={teacherSecondName} onChange={(e) => { setTeacherSecondName(e.target.value) }}
            />

            <label className="block mb-2 mt-4 text-sm font-bold text-gray-700" htmlFor="genero">
                Grupo
            </label>
            <select
                className="w-full md:w-1/2 lg:w-3/6 xl:w-1/4 px-3 py-2 text-sm leading-tight border-ternary text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="grupo"
                value={subjectGroup} onChange={(e) => { setSubjectGroup(e.target.value) }}
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
                className="w-full md:w-1/2 lg:w-3/6 xl:w-1/4 px-3 py-2 text-sm leading-tight border-ternary text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="h_inicial"
                type="time"
                placeholder="0"
                value={initialH} onChange={(e) => { setinitialH(e.target.value) }}
            />

            <label className="block mb-2 mt-4 text-sm font-bold text-gray-700" >
                Horario Final
            </label>
            <input
                className="w-full md:w-1/2 lg:w-3/6 xl:w-1/4 px-3 py-2 text-sm leading-tight border-ternary text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="h_final"
                type="time"
                placeholder="0"
                value={finalH} onChange={(e) => { setFinalH(e.target.value) }}
            />
            {
                isLoading ?
                    <button
                        className="w-full md:w-1/2 lg:w-3/6 xl:w-1/4 m-5 px-4 py-2 font-bold text-white bg-primary rounded hover:bg-ternary focus:outline-none focus:shadow-outline">
                        <FontAwesomeIcon icon={faSpinner} spin />
                    </button>
                    :
                    <button
                        className="w-full md:w-1/2 lg:w-3/6 xl:w-1/4 m-5 px-4 py-2 font-bold text-white bg-primary rounded hover:bg-ternary focus:outline-none focus:shadow-outline" onClick={SendAndSaveSubject}>
                        Registrar Materia
                    </button>
            }
        </div>
    )
}

export default RegistrarMateria