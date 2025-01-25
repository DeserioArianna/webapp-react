import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import ListMovies from "./pages/ListMovies";

function App() {

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">

      <a className="navbar-brand" href="/">Home</a>
      <a className="navbar-brand" href="/movies">Film</a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="d-flex">
        <input type="search" className="form-control me-2" placeholder="Cerca" />
        <button className="btn btn-outline-light">Cerca</button>
      </div>
    </div>
  </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<ListMovies />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
