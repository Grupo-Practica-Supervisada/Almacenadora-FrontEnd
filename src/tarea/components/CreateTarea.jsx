import React, { useState } from 'react'
import { tarea } from '../models/tarea';
import { sendData } from '../helpers/FormTareaHelper';

export const CreateTarea = () => {
  const [agregar, setAgregar] = useState(tarea);



  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(agregar, 1, 0);
    // Llamar a la función enviarDatos() y pasar el estado actual como argumento
  };

  return (
    <>
      <div className='container'>
        <h1 id='create-tarea'>CREAR TAREA</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="text-black">Nombre tarea</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              onChange={(event) =>
                setAgregar({
                  tarea: {
                    ...agregar.tarea,
                    nombre: event.target.value,
                  },
                })
              }
            />
          </div>
          <div className="form-group">
            <label className="text-black">Descripción</label>
            <textarea
              className="form-control"
              name="descripcion"
              onChange={(event) =>
                setAgregar({
                  tarea: {
                    ...agregar.tarea,
                    descripcion: event.target.value,
                  },
                })
              }
            ></textarea>
          </div>
          <div className="form-group">
            <label className="text-black">Fecha de inicio</label>
            <br />
            <input
              type="date"
              className="form-control"
              onChange={(event) =>
                setAgregar({
                  tarea: {
                    ...agregar.tarea,
                    fechaInicio: event.target.value,
                  },
                })
              }
            />
          </div>
          <div className="form-group">
            <label className="text-black">Fecha de finalización</label>
            <br />
            <input
              type="date"
              className="form-control"
              onChange={(event) =>
                setAgregar({
                  tarea: {
                    ...agregar.tarea,
                    fechaFinal: event.target.value,
                  },
                })
              }
            />
          </div>
          <div className="form-group">
            <label className="text-black">Estado</label>
            <br />
            <input
              type="checkbox"
              onChange={(event) =>
                setAgregar({
                  tarea: {
                    ...agregar.tarea,
                    estado: event.target.checked,
                  },
                })
              }
            />
          </div>
          <div className="form-group">
            <label className="text-black">Creador</label>
            <input
              type="text"
              className="form-control"
              name="creador"
              onChange={(event) =>
                setAgregar({
                  tarea: {
                    ...agregar.tarea,
                    creador: event.target.value,
                  },
                })
              }
            />
          </div>
          <div className="container text-center">
            <button id='btn-enviar' type="submit" className="btn">
              Enviar
            </button>
          </div>
        </form>
      </div>


    </>
  )
}
