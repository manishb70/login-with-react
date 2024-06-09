import React, { useContext } from 'react';
import NoteContext from './NoteContext';
import { Navigate } from 'react-router-dom';
 


const ProtectedRoute = ({children}) => {

    const data =useContext(NoteContext)

    if(!data.auth){

                return <Navigate to="/login" ></Navigate>

    }

    return children ; 
}

export default ProtectedRoute;
