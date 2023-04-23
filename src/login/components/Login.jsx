import React, { useState } from 'react'
import { apiLogin } from '../api/apiLogin';
import Swal from "sweetalert2";


export const Login = () => {
    //Manejo del state del email y password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await apiLogin(email, password);
        if (result) {
            Swal.fire({
                icon: 'success',
                title: 'Todo Ok papu',
                text: 'Ha iniciado sesion correctamente',
                confirmButtonText: 'Ok'
            }).then((r) => {
                if (r.isConfirmed) {
                    window.location.href = '/'
                }
            })
        }
    }

    return (
        <>

            <div id='contenedor'>
                <div id='central'>
                    <form id='login' onSubmit={handleSubmit}>
                        <div className="titulo">
                            Bienvenido
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Direcciòn de Email</label>
                            <input type="email" className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                value={email} onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="password"
                                value={password}
                                onChange={(p) => setPassword(p.target.value)}
                                required

                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Iniciar Sesion</button>
                    </form>
                </div>

            </div>

        </>


    )
}
