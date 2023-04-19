import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { formOptions, sendData } from "../helpers/FormTareaHelper";

export const FormTarea = ({
  nombre,
  descripcion,
  fechaInicio,
  fechaFinal,
  estado,
  creador,
}) => {
  
  const [state, setState] = useState({
    nombre: nombre || "",
    descripcion: descripcion || "",
    fechaInicio: fechaInicio.slice(0, 10),
    fechaFinal: fechaFinal.slice(0, 10),
    estado: estado,
    creador: creador || "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const {handleSubmit} = useForm(formOptions);

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

  const crud = async () => {
    await sendData(tarea, option);
  };
  console.log("Entre");

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="text-black">Nombre de usuario</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={state.nombre}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label className="text-black">Descripción</label>
        <textarea
          className="form-control"
          name="descripcion"
          value={state.descripcion}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="form-group">
        <label className="text-black">Fecha de inicio</label>
        <br />
        <input
          type="date"
          className="form-control"
          selected={state.fechaInicio}
          onChange={(value) => handleDateChange("fechaInicio", value)}
        />
      </div>
      <div className="form-group">
        <label className="text-black">Fecha de finalización</label>
        <br />
        <input
          type="date"
          className="form-control"
          selected={state.fechaFinal}
          onChange={(value) => handleDateChange("fechaFinal", value)}
        />
      </div>
      <div className="form-group">
        <label className="text-black">Estado</label>
        <br />
        <input
          type="checkbox"
          checked={state.estado}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="form-group">
        <label className="text-black">Creador</label>
        <input
          type="text"
          className="form-control"
          name="creador"
          value={state.creador}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn">
        Enviar
      </button>
    </form>
  );
};
