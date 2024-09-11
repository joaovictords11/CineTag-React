import React from 'react'
import Cabecalho from '../../components/Cabecalho'
import FavoritosProvider from '../../contexts/Favoritos'
import Container from '../../components/Container'
import { Outlet } from 'react-router-dom'
import Rodape from '../../components/Rodape'

const PaginaBase = () => {
  return (
    <main>
        <Cabecalho/>
        <FavoritosProvider>
            <Container>
                <Outlet/>
            </Container>
        </FavoritosProvider>
        <Rodape/>
    </main>
  )
}

export default PaginaBase