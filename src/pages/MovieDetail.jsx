import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const MovieDetail = () => {
    const { id } = useParams();
    console.log(id)
    const [movie, setMovie] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/movies/${id}`).then(res => {
            setMovie(res.data.data);  
        }).catch(err => {
            console.error("Errore durante il recupero dei dati:", err);
        });
    }, [id]);

    return (
        <div>
            <h1>{movie.title}</h1>
            <img src={`http://localhost:3001/movies_cover/${movie.image}`} alt={movie.title} />
            <p>{movie.abstract}</p>
            <h3>Recensioni</h3>
            {movie.reviews && movie.reviews.length > 0 ? (
                movie.reviews.map((review) => (
                    <div key={review.id} className="card mb-3">
                        <div className="card-body">
                            <h4>{review.name}</h4>
                            <h5>Voto: {review.vote}</h5>
                            <p>{review.text}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>Non ci sono recensioni</p> 
            )}
        </div>
    );
};

export default MovieDetail;