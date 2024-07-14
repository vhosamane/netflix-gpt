import { useEffect } from "react"
import { API_OPTION } from "../constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../movieSlice";

const useTopRated = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTION);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(() => {
        getTopRatedMovies();
    }, []);
}

export default useTopRated;