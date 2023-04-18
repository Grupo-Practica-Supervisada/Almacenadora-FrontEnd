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