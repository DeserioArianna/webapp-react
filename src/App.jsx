import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import ListMovies from "./pages/ListMovies";
import AppLayout from "./layouts/AppLayout";
import MovieDetail from "./pages/MovieDetail";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<ListMovies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
