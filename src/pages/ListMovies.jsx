import axios from "axios";
import { useEffect, useState } from "react";

const ListMovies = () => {
    const [movies, setMovies] = useState([]);
    console.log(movies)

    useEffect(() => {
        axios.get("http://localhost:3001/movies").then(res => {
            console.log(res.data.data)
            setMovies(res.data.data);
        })
    }, []);

    return (
        <div>
            <h1>Lista Film</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>

    )
}

export default ListMovies;

