import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext();


const auth = getAuth(app)


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(user);

  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const logOut = ()=>{
    return signOut(auth);
  }

  const signIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password);
  }

  

  const updateUserProfile = (updateData)=>{
    return updateProfile(auth.currentUser, updateData);
  }; 

  useState(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        setLoading(false);
    })
    return ()=>{
        unsubscribe();
    }
  },[])

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    updateUserProfile,
    loading, 
    setLoading,
  };
  return (<AuthContext value={authData}>{children}</AuthContext>);
};

export default AuthProvider;
