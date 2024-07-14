import { useEffect } from "react"
import { API_OPTION } from "../constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../movieSlice";

const usePopular = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTION);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default usePopular;