import {useEffect}from 'react';
import Paciente from './Paciente'

const ListadoPaciente = ({ pacientes,setPaciente,eliminarPaciente }) => {

  

  return (
    <div className="w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Paciente</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Administra tus {''}
            <span className="text-indigo-600 font-bold ">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => {
            return (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente = {setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            )
          })}
        </>
      ) :
      (
        <>
          <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold ">y apareceran en este lugar.</span>
          </p>
        </>
      )}


    </div>
  )
}

export default ListadoPaciente
