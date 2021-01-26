import React, {createContext, useState, useEffect, SetStateAction, Dispatch} from 'react';
import firebase from 'gatsby-plugin-firebase';

export const AuthContext = createContext({})

const AuthProvider = ({children}) => {
    const [user, setUser]:any = useState();

    useEffect(() => {
        firebase.auth().onAuthStateChanged((newUser) => setUser(newUser));

        // return () => {                            
            
        // };
    }, [])

    return <AuthContext.Provider value={{user, setUser}}>
        {children}
        </AuthContext.Provider>
}

export default AuthProvider