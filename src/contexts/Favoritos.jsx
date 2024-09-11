import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  return (
    <FavoritosContext.Provider value={{ favoritos, setFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritosContext = () => {
  const { favoritos, setFavoritos } = useContext(FavoritosContext);

  const adicionarFavorito = (novoFavorito) => {
    const favoritoRepetido = favoritos.some(
      (item) => item.id === novoFavorito.id
    );

    if (!favoritoRepetido) {
      return setFavoritos([...favoritos, novoFavorito]);
    }

    const favoritosAtualizados = favoritos.filter(
      (favorito) => favorito.id !== novoFavorito.id
    );

    return setFavoritos(favoritosAtualizados)
  };

  return {
    favoritos,
    adicionarFavorito,
  };
};

export default FavoritosProvider;
