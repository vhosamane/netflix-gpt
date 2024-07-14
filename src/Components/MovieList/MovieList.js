import MovieCard from "../MovieCard/MovieCard"

const MovieList = ({title, movies}) => {
    return (
        <div className="movieList-container">
            <h1>{title}</h1>
            <div className="movies-card">
                {
                    movies?.map((movie) => (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList
