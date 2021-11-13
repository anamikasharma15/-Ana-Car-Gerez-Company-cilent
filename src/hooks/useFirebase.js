import initFirebase from "../Pages/Firebase/Firebase.init";
import { GoogleAuthProvider, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";


const useFirebase = () => {
   const [user, setUser] = useState({});
   const [error, setError] = useState('');
   const [loading, setLoading] = useState(true);

   initFirebase();
   
   const auth = getAuth();

   // Update user
   const updateName = (name) => {
      updateProfile(auth.currentUser, {
         displayName: name
      })
         .then(() => {

         })
         .catch(error => {
            setError(error.message)
         })
   };

   // Log in with Google
   const LogInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    setError('')
     signInWithPopup(auth, googleProvider)
    .then((result) =>{
    setUser(result.user);
    sessionStorage.setItem("email",result.user.email);
    })
   };

   // register with email and password
   const RegisterWithEmailPassword = (email, password, displayName) => {
      setError('')

      createUserWithEmailAndPassword(auth, email, password)
         .then(result => {
            console.log(result.user);
            handleUserInfoRegister(result.user.email);
            updateName(displayName);
            setUser(result.user)
            setLoading(true)
         })
         .catch(error => {
            setError(error.message)
         })
         .finally(() => {
            setLoading(false)
         });
   };

   const handleUserInfoRegister = (email) => {
    fetch("http://localhost:5000/addUserInfo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
   // Log In with email and password
   const logInWithEmailPassword = (email, password) => {
      setError('')
      return signInWithEmailAndPassword(auth, email, password)

   };

   const logOut = () => {
      setError('')
      signOut(auth)
         .then(() => setUser({}))
         .finally(() => setLoading(false))
   };

   // Observe User State Changing
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, user => {
         if (user) {
            setUser(user);
            setLoading(false)
         }
         else {
            setUser({});
         }
      })
      setLoading(false);
      return () => unsubscribe;
   }, []);


   return {
      loading,
      setLoading,
      setUser,
      user,
      setError,
      error,
      LogInWithGoogle,
      RegisterWithEmailPassword,
      logInWithEmailPassword,
      
      logOut
   }
};

export default useFirebase;