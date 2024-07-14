import { useEffect } from "react"
import { API_OPTION } from "../constants";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../movieSlice";

const useUpComing = () => {
    const dispatch = useDispatch();
    const getUpComingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTION);
        const json = await data.json();
        dispatch(addUpComingMovies(json.results));
    }

    useEffect(() => {
        getUpComingMovies();
    }, []);
}

export default useUpComing;