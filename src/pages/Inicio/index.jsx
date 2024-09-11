import React, { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import Card from "@/components/Card";
import styles from "./Inicio.module.css";

const Inicio = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/joaovictords11/CineTag-ReactJs/videos"
    )
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
      });
  }, []);

  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.length > 0 ? (
          videos.map((video) => <Card key={video.id} {...video} />)
        ) : (
          <h2>Ops! Erro ao carregar vídeos</h2>
        )}
      </section>
    </>
  );
};

export default Inicio;
