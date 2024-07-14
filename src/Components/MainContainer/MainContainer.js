import { useSelector } from "react-redux";
import VideoTitle from "../VideoTitle/VideoTitle";
import VideoBackground from "../VideoBackground/VideoBackground";

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if (!movies) return;

    const mainMovie = movies[0];

    const { original_title, overview, id} = mainMovie

    return (
        <div className="main-contanier">
            <VideoTitle title={original_title} des={overview} />
            <VideoBackground id={id} />
        </div>
    )
}

export default MainContainer;