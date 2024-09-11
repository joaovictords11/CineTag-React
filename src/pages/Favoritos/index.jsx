import React from "react";
import styles from "./Favoritos.module.css";
import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import Card from "@/components/Card";
import { useFavoritosContext } from "@/contexts/Favoritos";

const Favoritos = () => {
  const { favoritos } = useFavoritosContext();

  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favoritos.length > 0 ? (
          favoritos.map((video) => <Card key={video.id} {...video} />)
        ) : (
          <h2 className={styles.semFavoritos}>Você ainda não tem favoritos!</h2>
        )}
      </section>
    </>
  );
};

export default Favoritos;
