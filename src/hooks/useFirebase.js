import  { useEffect, useState } from 'react';
import {
  getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, } from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';


initializeAuthentication();

const useFirebase = () => {  
    const [currentUser, setUser] = useState({});
    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

          
   useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, user => {
       if (user) {
         setUser(user);
       } else {
         setUser({});
       }
       setLoading(false);
     });
     return () => unsubscribe();
   }, []);
    const signInUsingGoogle = () => {  
        return signInWithPopup(auth, googleProvider);

    }

    const logOut = () => {
        
        return signOut(auth).then(() => {
           setUser({})
       })
        .finally(()=> {})
    }
  return {
     currentUser,
      error,
    loading,
      setError,
      setUser,
      setLoading,
    signInUsingGoogle,
    logOut
  } 
}

export default useFirebase;