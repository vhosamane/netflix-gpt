import { useSelector } from "react-redux";
import MovieList from "../MovieList/MovieList";
import { MOVIE_LIST_NOW_PLAYING, MOVIE_LIST_POPULAR, MOVIE_LIST_TOP_RATED, MOVIE_LIST_UP_COMING } from "../../utils/constants";

const SecondaryContanier = () => {

    const movies = useSelector(store => store.movies);

    return (
        <div className="secondary-container">
            <MovieList title={MOVIE_LIST_NOW_PLAYING} movies={movies.nowPlayingMovies} />
            <MovieList title={MOVIE_LIST_UP_COMING} movies={movies.upComingMovies} />
            <MovieList title={MOVIE_LIST_POPULAR} movies={movies.popularMovies} />
            <MovieList title={MOVIE_LIST_TOP_RATED} movies={movies.topRatedMovies} />
        </div>
    )
}

export default SecondaryContanier;