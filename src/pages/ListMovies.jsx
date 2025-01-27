import axios from "axios";
import { useEffect, useState } from "react";
import CardMovie from "../components/CardMovie";


const ListMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/movies").then(res => {
            setMovies(res.data.data);
        })
    }, []);

    return (
        <div>
            <h1>Lista Film</h1>
            <div className="row">
                {movies.map(movie => {
                    console.log(movie)
                    return (
                        <div key={movie.id} className="col-md-4 mb-4">
                            <CardMovie
                                title={movie.title}
                                genre={movie.genre}
                                release_year={movie.release_year}
                                abstract={movie.abstract}
                                image={movie.image}
                                id={movie.id} />
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default ListMovies;

