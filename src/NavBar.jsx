import React from 'react'
import { isUserAuthenticated } from './login/helpers/LoginHelper'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    const logOut = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }
    return (
        <>
            {
                isUserAuthenticated() && (
                    <nav className="navbar navbar-expand-lg navbar-light bg-light" data-bs-theme="dark">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/" >
                                ALMACENADORA
                            </Link>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" ></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul className='navbar-nav me-auto mb-x mb-lg-0'>
                                    <li className='nav-item'>
                                        <Link className='nav-item-active' to='/agregar'>Agregar tareas</Link>
                                    </li>
                                </ul>

                                <ul className="navbar-nav ms-auto" >
                                    {localStorage.getItem("token") && (
                                        <li className="nav-item" >
                                            <Link className="nav-link" to="/login" onClick={() => logOut()} >
                                                Cerrar Sesión
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </nav>
                )
            }
        </>
    )
}
