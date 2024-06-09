import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {

    const state = {
        "name": "manish",
        "number": 8882568627
    }   

    const [globaluser, setglobaluser] = useState("manish");
    const [Globalpassword, setGlobalpassword] = useState("manish");
    const [auth,setAuth] = useState(false)

    return (

        <NoteContext.Provider value={{ state,globaluser,setglobaluser,Globalpassword,setGlobalpassword,auth,setAuth}}>

            {props.children }

        </NoteContext.Provider>
    )

}


export default NoteState;