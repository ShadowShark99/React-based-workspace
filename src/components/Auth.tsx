import { auth } from '../config/firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { useState } from 'react';

const Auth = () => {
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const signIn = async() => {
    await createUserWithEmailAndPassword(auth, email, pass);
  };
  return (
    <div>
      <input placeholder="Email..." onChange={(e) => setEmail(e.target.value)}/>
      <input placeholder="Password..." onChange={(e) => setPass(e.target.value)}/>
      <button onClick={signIn}>Sign in</button>
    </div>
  )
}

export default Auth