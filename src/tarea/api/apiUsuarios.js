import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem('token');
const URL = 'http://localhost:8080/api/usuarios/';

export const apiUsuarios = async (id) => {
    try {
      const { data: { usuario } } = await axios.get(`${URL}${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return usuario;
    } catch (error) {
      
    }
  }