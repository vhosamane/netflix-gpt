import { useEffect } from "react";
import { API_OPTION } from "../constants";
import { addTrailerVideo } from "../movieSlice";
import { useDispatch } from "react-redux";

const useTrailerVideo = (id) => {
    const dispatch = useDispatch();
    const getTrailerVideo = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ id +'/videos?language=en-US', API_OPTION);
        const json = await data.json();

        const filterData = json.results.filter((video) => video.type === 'Trailer');
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        getTrailerVideo();
    }, []);
}

export default useTrailerVideo;