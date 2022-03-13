import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  
  const postPage = () => {
      history.push("/posts")
  }

  const signInPage = () => {
      history.push("/signin")
  }

  const signUpPage = () => {
      history.push("/signup")
  }

  return <div>
      <h1>Queremos terminar el ciclo !</h1>
      <button className="btn btn-success"
          onClick={postPage}>Visitar todos los POSTS
      </button>
      <button className="btn btn-light"
          onClick={signInPage}>Iniciar Sesión
      </button>
      <button className="btn btn-info"
          onClick={signUpPage}>Regístrate
      </button>
  </div>;
}
