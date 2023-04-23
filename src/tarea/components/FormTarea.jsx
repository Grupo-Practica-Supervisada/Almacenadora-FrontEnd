import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { sendData } from "../helpers/FormTareaHelper";

export const FormTarea = (tareaEdit, option, id) => {
  const [state, setState] = useState(tareaEdit);
  


  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(state, 2, id);

  };



  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="text-black">Nombre de usuario</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={state.tarea.nombre}
          onChange={(event) =>
            setState({
              tarea: {
                ...state.tarea,
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
          value={state.tarea.descripcion}
          onChange={(event) =>
            setState({
              tarea: {
                ...state.tarea,
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
          value={state.tarea.fechaInicio.substring(0, 10)}
          onChange={(event) =>
            setState({
              tarea: {
                ...state.tarea,
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
          value={state.tarea.fechaFinal.substring(0, 10)}
          onChange={(event) =>
            setState({
              tarea: {
                ...state.tarea,
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
          checked={state.tarea.estado}
          onChange={(event) =>
            setState({
              tarea: {
                ...state.tarea,
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
          value={state.tarea.creador}
          onChange={(event) =>
            setState({
              tarea: {
                ...state.tarea,
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
  );
};
