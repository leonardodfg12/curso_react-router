import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { busca } from "../api/api";
import "../assets/css/componentes/cartao.css";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  let navigate = useNavigate();
  useEffect(() => {
    busca(`/posts/${id}`, setPost).catch(() => {
      navigate("/404");
    });
  }, [id, navigate]);
  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{post.title}</h2>
        <p className="carta__texto">{post.body}</p>
      </article>
    </main>
  );
};

export default Post;
