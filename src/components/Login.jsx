import { and } from "ajv/dist/compile/codegen";
import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import NoteContext from "../context/NoteContext";






function Login() {

    const state = useContext(NoteContext)
    const navigate = useNavigate()

    const [username, setUsername] = useState({});
    const [password, setPassword] = useState({});

    const toCheck = () => {

        if (username == state.globaluser && password == state.Globalpassword) {
        
                state.setAuth(true)                
                navigate("/profile")
            

        } else {
            return alert("please enter the values ")
        }

    }


    return (



        <>

            <div className=" m-auto  flex flex-col  ">
                <label htmlFor=""> Enter username</label>
                <input type="text" className="px-4 border-2 border-black"

                    onChange={(e) => { setUsername(e.target.value) }}

                />
                <label htmlFor=""> Enter Password</label>
                <input type="text"
                    onChange={(e) => { setPassword(e.target.value) }}
                />

                <button

                    onClick={toCheck}


                > Submit</button>








            </div>






        </>



    )




}









export default Login;