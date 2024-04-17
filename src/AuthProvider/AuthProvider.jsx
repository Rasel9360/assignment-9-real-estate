import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const gitHubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();



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

    // sign is with google
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
            
    }

    const gitHubLogin = () => {
        return signInWithPopup(auth, gitHubProvider)
            
    }


    // onAuth  state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('onAuthChanged', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        googleLogin,
        gitHubLogin

    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;