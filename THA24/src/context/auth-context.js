
import React from 'react'

const authctx=React.createContext({
    isloggedin:false,
    setisloggedin:()=>{}   
})



export default authctx;
