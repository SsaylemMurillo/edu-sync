import React, { useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import CardMateria from "@/app/components/card/cardMateria";

const PageMateria = () => {
  const [cardMateria, setCardMateria] = useState([]);

  const handleCreateCard = () => {
    // Siempre colocar la nueva tarjeta a la derecha
    const position = 'right';

    // Agregar la nueva card con una clave única
    // setCardMateria((prevCards) => [
    //   ...prevCards,
    //   { position, key: Math.random().toString(20).substring(7) } // Usar una clave única
    // ]);
  };

  return (
    <div className="flex flex-col flex-auto w-auto h-screen" >
      <div className="h-screen">
        <div className="grid lg:grid-cols-2 h-full w-auto">
          <div className="col-span-1 flex justify-start">
            <div className="min-w-[450] px-8">
              <div className="mb-8">
                <h1 className="text-3xl font-bold mt-10">Asignaturas</h1>
                <hr className="w-screen max-w-4xl mt-2 border-y-2 rounded-full border-yellow-500"></hr>
                <section>
                  <div className="grid grid-cols31 md:grid-cols-3 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <div className="grid gap-1 text-base grid-cols-1 ">
                          
                        </div>
                    </div>
                  </div>
              </section>
                <button
                  onClick={handleCreateCard}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                >
                  Crear Asignatura
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageMateria;
