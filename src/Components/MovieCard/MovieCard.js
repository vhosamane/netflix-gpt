import { IMG_CDN_W500 } from "../../utils/constants";

const MovieCard = ({movie}) => {
    return (
        <div className="movie-card-holder">
            <div className="movie-poster">
                <img src={IMG_CDN_W500 + movie.poster_path} />
            </div>

            <div className="movie-title">
                <h3>{movie.original_title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;
