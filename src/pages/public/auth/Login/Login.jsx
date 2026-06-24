import React, { useState } from 'react'
import loginUser from '../../../../services/hooks/loginUser';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function tryLogin() {
    
    const intent = {
      email: email,
      passwordHash:password
    };

    const response = await loginUser(intent);

   console.log(response);
  }

  return (
    <>
      <h1>Porfavor logueate</h1>

      <label htmlFor=""> Email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label> <br />

      <label htmlFor=""> Contraseña
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
      </label>

      <button onClick={() => tryLogin()}>Enviar</button>

    </>
  )
}

export default Login