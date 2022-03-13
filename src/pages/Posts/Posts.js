import React from "react";
import Post from "../../components/Post/Post";
import { gql, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

const GET_POSTS = gql`
  query Query {
  posts {
    id
    title
    content
    createdAt
    user {
      name
    }
  }
}
`

export default function Posts() {

  const history = useHistory();

  const homePage = () => {
    history.push("/")
  }
  // Ejecutar la query hacia nuestro GraphQL
  const { data, error, loading } = useQuery(GET_POSTS)

  // Devolver el error si existe
  if (error) return <div>Error</div>

  // Devolver pagina de cargando mientras cargan los datos
  if (loading) return <div>Cargando</div>

  const { posts } = data
  return <div>
    {posts.map(post => {
      return <Post
        key={post.id}
        title={post.title}
        content={post.content}
        date={post.createdAt}
        id={post.id}
        user={post.user.name}
      />
    })}

    <button className="btn btn-warning"
      onClick={homePage}>Volver
    </button>
  </div>;
}
