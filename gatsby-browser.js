import "./src/style/main.css";
import "firebase/auth";
import React from 'react'
import AuthProvider from './src/context/auth';


export const wrapRootElement = ({element})=>(
    <AuthProvider>
        {element}
    </AuthProvider>
)
