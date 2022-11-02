import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";
import { auth } from "./firebase";

function App() {

  const [signupEmail, setSignupWmail] = useState(" ")
  const [password, setPAssword] = useState(" ")
  const [email, setEmail] = useState("");
  const [passwordLogin, settPasswordLogin] = useState("");
  const [user, setUser] = useState(null)

  const signUp = ()=>{
    createUserWithEmailAndPassword(auth,signupEmail,password)
    .then((userCredential)=>{
      const user = userCredential.user
      // console.log("user",user.email);
      setUser(user)
    }).catch((err)=>{
      const error = err.message
    })
  }

  const signIn = () =>{
    signInWithEmailAndPassword(auth, email, passwordLogin)
    .then((userCredential)=>{
      const user = userCredential.user
      setUser(user)
    })
    .catch((err)=>{
      const error = err.message
    })
  }

  return (
    <div className="app">
     {user ? <div><h1>{user.email}</h1></div> : 
     <div>
       <div className="app__signup">
      <h1>Signup</h1>
        <label>Email</label>
        <br />
        <input type="email" 
        className="form-control"
        placeholder="Enter email"
        onChange={(e)=>setSignupWmail(e.target.value)}
        />
        <br />
        <br />
        <label>Password</label>
        <br />
        <input type="Password" 
        placeholder="Enter password"
        className="form-control"
        onChange={(e)=>setPAssword(e.target.value)}
        /><br />
        <br />
        <button type="submit" className="btn btn-primary" onClick={signUp}>Signup</button>
      </div>

      <div className="app__signin">
      <h1>SignIn</h1>
        <label>Email</label>
        <br />
        <input type="email" 
        className="form-control"
        placeholder="Enter email"
        onChange={(e)=>setEmail(e.target.value)}
        />
        <br />
        <br />
        <label>Password</label>
        <br />
        <input type="Password" 
        placeholder="Enter password"
        className="form-control"
        onChange={(e)=>settPasswordLogin(e.target.value)}
        /><br />
        <br />
        <button type="submit" className="btn btn-primary" onClick={signIn}>SignIn</button>
      </div>
     </div>
     }
    </div>
  );
}

export default App;
