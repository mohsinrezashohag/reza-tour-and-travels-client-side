import initializeFirebaseApp from "../components/firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


initializeFirebaseApp();

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState([])
    const [isLoading, setIsLoading] = useState(true)



    const provider = new GoogleAuthProvider();
    const auth = getAuth();



    // google sign in method
    const googleSignIn = () => {
        // setIsLoading(true)
        return signInWithPopup(auth, provider)


    }


    // on state change user manage
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser("")
            }
            setIsLoading(false)
        });

    }, [])

    // logout

    const logOut = () => {
        // setIsLoading(true)
        signOut(auth).then(() => {
            window.location.reload();
        }).catch((error) => {
            setError(error)
        });
    }








    return {
        googleSignIn,
        user,
        error,
        logOut,
        isLoading
    }

}


export default useFirebase;