import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { formOptions, sendData } from "../helpers/FormTareaHelper";

export const FormTarea = ({
  tarea, option, id
}) => {
  
  const [state, setState] = useState({tarea});
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
          value={state.nombre}
          onChange={({ target: { value } }) =>
          setState(() => ({ ...state, nombre: value }))
        }
        />
      </div>
      <div className="form-group">
        <label className="text-black">Descripción</label>
        <textarea
          className="form-control"
          name="descripcion"
          value={state.descripcion}
          onChange={({ target: { value } }) =>
          setState(() => ({ ...state, descripcion: value }))
        }
        ></textarea>
      </div>
      <div className="form-group">
        <label className="text-black">Fecha de inicio</label>
        <br />
        <input
          type="date"
          className="form-control"
          selected={state.fechaInicio}
          onChange={({ target: { value } }) =>
          setState(() => ({ ...state, fechaInicio: value }))
        }
        />
      </div>
      <div className="form-group">
        <label className="text-black">Fecha de finalización</label>
        <br />
        <input
          type="date"
          className="form-control"
          selected={state.fechaFinal}
          onChange={({ target: { value } }) =>
          setState(() => ({ ...state, fechaFinal: value }))
        }
        />
      </div>
      <div className="form-group">
        <label className="text-black">Estado</label>
        <br />
        <input
          type="checkbox"
          checked={state.estado}
          onChange={({ target: { value } }) =>
          setState(() => ({ ...state, estado: value }))
        }
        />
      </div>
      <div className="form-group">
        <label className="text-black">Creador</label>
        <input
          type="text"
          className="form-control"
          name="creador"
          value={state.creador}
          onChange={({ target: { value } }) =>
          setState(() => ({ ...state, creador: value }))
        }
        />
      </div>
      <button type="submit" className="btn">
        Enviar
      </button>
    </form>
  );
};
