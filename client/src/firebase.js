import { initializeApp } from "firebase/app";
import url from './config'
import axios from "axios";

import {getAuth,GoogleAuthProvider,signInWithPopup,FacebookAuthProvider} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCFrW_FoeFCJf8hW-0ASV_nOqlitlbOvWQ",
    authDomain: "auth-login-5b265.firebaseapp.com",
    projectId: "auth-login-5b265",
    storageBucket: "auth-login-5b265.appspot.com",
    messagingSenderId: "676108054373",
    appId: "1:676108054373:web:e1e96a2673e05179b93b8c",
    measurementId: "G-PVMMF224P3"
  
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth =getAuth(firebaseApp)



const provider=new GoogleAuthProvider();

const signInWithGoogle=(userlogin)=>{

    signInWithPopup(auth,provider).then((res)=>{

        
       
        axios.post(url+'/registration/g_auth/login',{ name:res.user.displayName,email:res.user.email,g_token:res.user.stsTokenManager.accessToken}).then((response)=>{
            userlogin(response.status);

        })

    }).catch((e)=>{
        alert('Somethings Wrong')
    })
}



const f_provider=new FacebookAuthProvider();


const signInWithFacebook=(userlogin)=>{
    

    
    signInWithPopup(auth,f_provider).then((res)=>{

        
        axios.post(url+'/registration/f_auth/login',{name:res.user.displayName,email:res.user.email,g_token:res.user.stsTokenManager.accessToken}).then((response)=>{
            userlogin(response.status);

        })
    
    }).catch((e)=>{
        alert('Somethings Wrong')
    })
}








export {signInWithGoogle,signInWithFacebook};