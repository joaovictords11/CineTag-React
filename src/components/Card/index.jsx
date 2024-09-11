import { useFavoritosContext } from "@/contexts/Favoritos";
import styles from "./Card.module.css";
import iconeFavoritar from "/assets/favoritar.png";
import iconeDesfavoritar from "/assets/desfavoritar.png";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, titulo, capa }) => {
  const { favoritos, adicionarFavorito } = useFavoritosContext();
  const isFavorito = favoritos.some((item) => item.id === id);
  const icone = isFavorito ? iconeDesfavoritar : iconeFavoritar;

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/videos/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>
      <img
        src={icone}
        alt="Favoritar filme"
        className={styles.favoritar}
        onClick={() => adicionarFavorito({ id, titulo, capa })}
      />
    </div>
  );
};

export default Card;
