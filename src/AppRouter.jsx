import React from 'react'
import { Login } from './login/components/Login'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from './NavBar';
import { isUserAuthenticated } from './login/helpers/LoginHelper';
import { ListaTareas } from './tarea/components/ListaTareas';
import { CreateTarea } from './tarea/components/CreateTarea';

export const AppRouter = () => {
    const acepta = true;
    return (
        <>
            <NavBar></NavBar>

            <Routes>
                <Route path='/' element={isUserAuthenticated() ? (
                    <ListaTareas></ListaTareas>
                ) : (<Navigate to='/login' />)}></Route>

                <Route path='/holi' element={ <h1>dllfhsdlfjslkfjslkfjsls</h1> } >

                </Route>

                
                <Route path='/agregar' 
                element={acepta ? 
                (<CreateTarea/>) : (<Navigate to='/login'/>)}>

                </Route>

                <Route path='/login' element={
                    !isUserAuthenticated() ? <Login></Login> : <Navigate to='/'></Navigate>
                }></Route>
            </Routes>
        </>
    );
}
