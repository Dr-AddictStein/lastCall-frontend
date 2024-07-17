import { useState } from "react";
import { useContext } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
export const useSignup=()=>{
    const navigate = useNavigate();
    const [error,setError]=useState(null);
    const {dispatch}=useAuthContext();

    const signup=async(firstname, lastname, phone, email, password)=>{
        setError(null);

        const response=await fetch("http://localhost:4000/api/user/signup",{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({firstname, lastname, phone, email, password})
        })

        const json=await response.json();

        if(!response.ok){
            return (json.error);
            setError(json.error);
        }
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json));

            dispatch({type:'LOGIN',payload:json})
            navigate(`/`);

        }
    }
    const gSignup=async(firstname, lastname, email, image)=>{
        setError(null);

        const response=await fetch("http://localhost:4000/api/user/signup",{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({firstname, lastname, email, image})
        })

        const json=await response.json();

        if(!response.ok){
            return (json.error);
            setError(json.error);
        }
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json));

            dispatch({type:'LOGIN',payload:json})
            navigate(`/`);

        }
    }

    return {signup,gSignup,error};
}