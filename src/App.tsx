import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./theme/global-styles";
import { Container } from "./styles";
import HomePage from "./pages/home-page";
import MoviePage from "./pages/movie-page";
import NotFoundPage from "./pages/not-found-page";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
      </Container>
    </>
  );
}

export default App;
