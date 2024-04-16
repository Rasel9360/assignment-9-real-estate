import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user  with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            
    }

    // login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            
    }

    // sign out
    const logOut = () => {
        return signOut(auth)
    }

    // onAuth  state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('onAuthChanged', currentUser)
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])


    const authInfo = {user, createUser, loginUser, logOut };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;