import React, { createContext, useState, useEffect } from 'react';
import app from '../utilities/firebase';

export const AuthContext = createContext();

function AuthContextProvider({ children }) {

    const [loggedUser, setLoggedUser] = useState(null);
    // const [pending, setPending] = useState(true);

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setLoggedUser(user);
            // setPending(false);
        })
    }, []);

    // if(pending){
    //     return <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%', fontSize: '1.4rem'}}>Loading...</div>
    // }

    return (
        <AuthContext.Provider value={{loggedUser, setLoggedUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
