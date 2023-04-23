import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem('token');
const URL = 'http://localhost:8080/api/tareas/';

export const apiTareas = async() => {
    try {
        const { data : { listaTareas }} = await axios.get(`${URL}mostrar`);
        return listaTareas;
    } catch (error) {
    }
}

export const DeleteTarea = async (id) => {
    try {
      const { data } = await axios.delete(`${URL}eliminar/${id}`);
      
      return true;
    } catch ({
      response: {
        data: { message },
      },
    }) {
      if (message === "Adiós papu") {
        window.location.href = "/login";
      }
      if (message) {
        return message;
      }
    }
  };

  export const updateTarea = async (id, nombre, descripcion, fechaInicio, fechaFinal, estado, creador) => {
    try {
      const { data: { tareaEditada } } = await axios.put(
        `${URL}editar/${id}`,
        {
          nombre : nombre, descripcion: descripcion, fechaInicio:fechaInicio, fechaFinal:fechaFinal
          , estado: estado, creador: creador
        },
        // { headers: { "x-token": token } }
      );
      return tareaEditada;
    } catch (error){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo editar la tarea!",
      });
    }
  };
  
  export const createTarea = async (nombre, descripcion, fechaInicio, fechaFinal, estado, creador) => {
    try {
      const { tareaGuardada } = await axios.post(
        `${URL}agregar`,
        {
          nombre, descripcion, fechaInicio, fechaFinal, estado, creador
        },
        // { headers: { "x-token": token } }
      );
      return true;
    } catch ({
      response: {
        data: { message },
      },
    }){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo editar la tarea!",
      });
    }
  };