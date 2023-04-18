import axios from "axios";
import Swal from "sweetalert2";
export const apiLogin = async (email, password) => {
    try {
        const URL = 'http://localhost:3000/api/login';
        const response = await axios.post(URL, {
            email,
            password
        });

        

        const token = response.data.token;

        (token) ? localStorage.setItem("token", token) : null;
        
        return token;

    } catch ({response: {data: {message}}}) {
        console.log(message);
        Swal.fire({
            icon : "error",
            title: "Error en el login",
            text: message
        })
    }
}
