import { Link } from "react-router";

const CardMovie = ({title, genre, release_year, abstract, image, id}) => {
    return (
        <>
            <div className="card" style={{width: "18rem"}}>
                <img src={`http://localhost:3001/movies_cover/${image}`} className="card-img-top" alt={title} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <div>
                            <h6>{genre}</h6>
                            <p>{release_year}</p>
                        </div>
                        <p className="card-text">{abstract}</p>
                        <Link to={`/movies/${id}`} className="btn btn-primary">Dettagli</Link>
                    </div>
            </div>
        </>
    )
}

export default CardMovie;