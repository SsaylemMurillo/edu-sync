import React from 'react';
// import SidebarProfesor from '../SidebarProfesor';

const PagesProfiles = () => {
  return (
    <div className='flex flex-col flex-auto w-full h-screen '>
      <div className="h-full">
        <div className="grid lg:grid-cols-2 h-full">
          <div className="col-span-2 flex justify-start items-stretch">
          {/* <SidebarProfesor/> */}
            <div className="min-w-[450] px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mt-7">Perfil</h1>
                    <div className="w-full">
                    <div className="bg-white p-4 border-t-4 border-ternary">
                        {/* Profile IMAGES */}
                        <div className="image overflow-hidden"></div>
                        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Sergio De La Hoz</h1>
                        <h3 className="text-gray-600 font-lg text-semibold leading-6">Profesor</h3>
                        <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui
                        unde aspernatur non deserunt
                        </p>
                        <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li className="flex items-center py-3">
                            <span>Member since</span>
                            <span className="ml-auto">Nov 07, 2016</span>
                        </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full my-2 mr-5">
          <div className="bg-white  shadow-sm rounded-sm pl-5">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span className="text-ternary">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">About</span>
            </div>
                <div className="text-gray-700">
                     <div className="grid md:grid-cols-2 text-sm">
                     <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Cedula</div>
                            <div className="py-2">119359302</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Primer Nombre</div>
                            <div className="py-2">Sergio</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Primer Apellido</div>
                            <div className="py-2">De La Hoz</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Genero</div>
                            <div className="py-2">Masculino</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Numero Celular </div>
                            <div className="py-2">+11 998001001</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Direccion</div>
                            <div className="py-2">Diagonal 13b #3-50</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Correo</div>
                                <div className="py-2">
                                    <a className="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Fecha de nacimiento    </div>
                                <div className="py-2">Feb 06, 1998</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-4 mt-1">
                      <button
                        className="block text-yellow-600 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-2"
                      >
                        Editar
                      </button>
                      <button
                        className="block text-yellow-600 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-2"
                      >
                        Guardar
                      </button>
                    </div>
          </div>

             </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default PagesProfiles;