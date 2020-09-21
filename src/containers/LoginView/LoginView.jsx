import React, { useState } from 'react';
import "./LoginView.css";
import { getAuth } from '../../firebase';



const LoginView = () =>{

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const db = getAuth();

    function submitData (){ 
      
    db.createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
    })

    console.log("Creation Successful")
    
    };


    return (
            <>
            <div className="container login_form_container">
                <div className="row">
                    <div className="form">
                        <label htmlFor="password" >Enter your email: </label>
                        <input type="text" id="email" placeholder="Email" onInput={(evt) => setEmail(evt.target.value)} /><br/>
                        <label htmlFor="password">Enter your password: </label>
                        <input type="text" id="password" placeholder="Password" onInput={(evt) => setPassword(evt.target.value)} /><br/>
                        <button type="button" className="btn btn-secondary login_button" onClick={ () => submitData()}>Login/Register</button>

                        
                    </div>
                </div>
            </div>
            </>
    )
   };

export default LoginView;