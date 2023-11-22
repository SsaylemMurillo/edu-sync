import React from 'react';

'use client'
function CardMateria() {
  return (
    
    <div className="flex min-h-max mt-2 ">
        
      <div className="relative flex max-w-[40rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
       
        <div class="p-2 ml-2">
            <div class="w-full lg:w-auto bg-white p-1 rounded-lg lg:rounded-l-none border-primary">
            <h6 class=" block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-ternary antialiased">
                Asignatura
            </h6>
            <h4 class="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Ing Software
            </h4>
			
			<form class="px-2 pt-4 pb-4 bg-white rounded">
				<div class="mb-1 md:flex md:justify-start">
					<div class="mb-2 md:mr-3 md:mb-0">
						<label class="block mb-2 text-sm font-bold text-gray-700" for="ccDocente">
							Cedula
						</label>
						<input
							class="w-32 px-3 py-2 text-sm leading-tight border-ternary text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
							id="ccDocente"
							type="text"
							placeholder="0000000"
						/>
					</div>
					<div class="mb-4 md:mr-3 md:mb-0">
						<label class="block mb-2 text-sm font-bold text-gray-700" for="primerNombre">
							Primer Nombre 
						</label>
						<input
							class="w-32  px-3 py-2 text-sm leading-tight border-ternary text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
							id="primerNombre"
							type="text"
							placeholder="Primer Nombre"
						/>
					</div>
						<div class="mb-2 md:mr-2 md:mb-0">
						<label class="block mb-2 text-sm font-bold text-gray-700" for="primerAppelido">
							Primer Apellido 
						</label>
						<input
							class="w-40 px-3 py-2 text-sm leading-tight border-ternary text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
							id="primerApellido"
							type="text"
							placeholder="Primer Apellido"
						/>
					</div>
					
				</div>
				<div class="md:flex">
          <div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="grupo">
										Grupo
									</label>
									<select
										className="w-24 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-ternary rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="grupo"
									>
										<option value="" disabled selected>
										Seleccionar
										</option>
										<option value="grp01">01</option>
										<option value="grp02">02</option>
									</select>
								</div>
						<div className="mb-4 md:mr-2 md:mb-0">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="genero">
								Día/s
							</label>
								<input type="" name="fecha" id="fecha" className="w-36 px-3 py-2 mb-3 text-sm leading-tight 
								text-gray-700 border border-ternary rounded shadow appearance-none 
								focus:outline-none focus:shadow-outline" value="" placeholder="Lunes - Miercoles">
							</input>
						
						</div> 
				</div>
				<div class="md:flex">
					<div class="mb-4 md:mr-3 md:mb-0">
						<label class="text-sm font-bold text-gray-700" for="h_inicio">
							Hora Inicio
						</label>
						<input type="time" name="hora_inicio" id="hora_inicio" class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 
						border border-ternary rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="" />
									
					</div>
					<div class="mb-4 md:mr-3 md:mb-0">
						<label class=" text-sm font-bold text-gray-700" for="h_final">
							Hora Final
						</label>
						<input type="time" name="h_final" id="h_final" class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 
						border border-ternary rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="" />
									
					</div>
								
				</div>
							<div class="md:col-span-5 text-right mt-2">
                <div class="inline-flex items-end">
                  <button class="bg-primary hover:bg-ternary text-white font-bold py-2 px-4 rounded">Editar</button>
                </div>
                <div class="inline-flex items-end ml-1" >
                  <button class="bg-primary hover:bg-ternary text-white font-bold py-2 px-4 rounded">Ver Grupo</button>
                </div>
                <div class="inline-flex items-end ml-1" >
                  <button class="bg-primary hover:bg-ternary text-white font-bold py-2 px-4 rounded">Asistencia</button>
                </div>
                <div class="inline-flex items-end ml-1" >
                  <button class="bg-primary hover:bg-ternary text-white font-bold py-2 px-4 rounded">Ver Notas</button>
                </div>
                
                <div class="inline-flex items-end ml-1" >
                  <button class="bg-primary hover:bg-ternary text-white font-bold py-2 px-4 rounded">Eliminar</button>
                </div>
            </div>
						</form>
					</div>
        </div>
      </div>
    </div>
  );
}

export default CardMateria;