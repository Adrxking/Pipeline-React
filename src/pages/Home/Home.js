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

    const perfilIona = () => {
        history.push("/profile/2")
    }

    const perfilAdrian = () => {
        history.push("/profile/3")
    }

    return <div>
        <h1>**Aplicación usando REACT y GRAPHQL**</h1>
        <button className="btn btn-success"
            onClick={postPage}>Visitar todos los POSTS!!!!!!!
        </button>
        <button className="btn btn-light"
            onClick={signInPage}>Iniciar Sesión
        </button>
        <button className="btn btn-info"
            onClick={signUpPage}>Regístrate
        </button>
        <button className="btn btn-info"
            onClick={perfilIona}>Perfil Iona
        </button>
        <button className="btn btn-info"
            onClick={perfilAdrian}>Perfil Adrian
        </button>
    </div>;
}
