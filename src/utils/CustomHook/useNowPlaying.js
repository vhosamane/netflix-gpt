import { useEffect } from "react"
import { API_OPTION } from "../constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../movieSlice";

const useNowPlaying = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTION);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
}

export default useNowPlaying;
