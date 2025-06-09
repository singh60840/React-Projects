import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
    const[user,setUser]=useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
            {/* The value prop is used to pass the user and setUser functions to the context */}
        {children}
        </UserContext.Provider>
    )
};

export default UserContextProvider