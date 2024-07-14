import { useSelector } from "react-redux";
import useTrailerVideo from "../../utils/CustomHook/useTrailerVideo";

const VideoBackground = ({id}) => {

    useTrailerVideo(id);
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

    return (
        <div className="video-contanier">
            <iframe 
                className="video-frame"
                src={`https://www.youtube.com/embed/` + trailerVideo?.key + `?playlist=`+ trailerVideo?.key + `&controls=0&showinfo=0&autoplay=1&mute=1&modestbranding=1&loop=1`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default VideoBackground;
