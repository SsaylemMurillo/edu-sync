'use client';
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { collection, getDocs, getDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/app/config/firebaseconfig";
import Swal from "sweetalert2";

import { useRouter } from "next/navigation";
const Show = () => {
    const [subjects, setSubjects] = useState([])
    const subjectCollection = collection(db, "subjects")
    const router = useRouter();
    const getSubjects = async () => {
        const data = await getDocs(subjectCollection)
        // console.log(data.docs)
        setSubjects(
            // data.docs.map(
            //     (doc)=>({...doc.data(), id:doc.id})
            // )   
        )

        console.log(subjects)
    }
    const deleteSubjects = async (id) => {
        const subjectDoc = doc(db, "subjects")
        await deleteDoc(subjectDoc)
        getSubjects()
    }

    useEffect(() => {
        getSubjects()
    })
    const PageRegister = async () => {
        router.push(`/dashboard/teacher/menu/materia/register`);
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="d-grid gap-2 ml-5">
                                <h1 className="text-3xl font-bold mt-10">Asignaturas</h1>
                                <hr className="w-screen max-w-4xl mt-2 border-y-2 rounded-full border-yellow-500"></hr>
                                
                            <button onClick={PageRegister} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                            > Crear Materia</button>

                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Show