import React from 'react'
import { Login } from './login/components/Login'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from './NavBar';
import { isUserAuthenticated } from './login/helpers/LoginHelper';
import { ListaTareas } from './user/components/ListaTareas';
import { CreateUser } from './user/components/CreateUser';

export const AppRouter = () => {
    return (
        <>
            <NavBar></NavBar>

            <Routes>
                <Route path='/' element={isUserAuthenticated() ? (
                    <ListaTareas></ListaTareas>
                ) : (<Navigate to='/login' />)}></Route>

                
                <Route path='/agregar' 
                element={isUserAuthenticated() ? 
                (<CreateUser/>) : (<Navigate to='/login'/>)}>

                </Route>

                <Route path='/login' element={
                    !isUserAuthenticated() ? <Login></Login> : <Navigate to='/'></Navigate>
                }></Route>
            </Routes>
        </>
    );
}
