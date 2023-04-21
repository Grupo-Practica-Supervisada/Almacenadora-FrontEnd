import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { formOptions, sendData } from "../helpers/FormTareaHelper";

export const FormTarea = (tareaEdit, option, id) => {
  const [state, setState] = useState(tareaEdit);
  console.log("STATE RECIBIDO",state)
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    sendData(state, 2, id);
    // Llamar a la función enviarDatos() y pasar el estado actual como argumento
  };

  const handleDateChange = (name, value) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
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
      <button type="submit" className="btn">
        Enviar
      </button>
    </form>
  );
};
