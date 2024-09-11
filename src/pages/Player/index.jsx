import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import { useParams } from "react-router-dom";
import styles from "./Player.module.css";
import { useEffect, useState } from "react";

function Player() {
  const [video, setVideo] = useState();
  const {videoId} = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/joaovictords11/CineTag-React/videos?id=${videoId}`
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideo(...dados);
      });
  }, []);

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        {video ? (
          <iframe
            width="100%"
            height="100%"
            src={video.link}
            title={video.titulo}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        ) : (
          <h2>Ops! Video não encontrado</h2>
        )}
      </section>
    </>
  );
}

export default Player;
