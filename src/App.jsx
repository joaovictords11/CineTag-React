import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/index.jsx";
import Favoritos from "./pages/Favoritos/index.jsx";
import Player from "./pages/Player/index.jsx";
import ErrorPage from "./pages/ErrorPage/index.jsx";
import PaginaBase from "./pages/PaginaBase/index.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaBase />}>
            <Route index element={<Inicio />} />
            <Route path="favoritos" element={<Favoritos />} />
            <Route path="videos/:videoId" element={<Player />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
