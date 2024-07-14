import { Button } from "react-bootstrap";
import { PlayFill } from 'react-bootstrap-icons';

const VideoTitle = ({title, des}) => {
    return (
        <div className="title-container">
            <h1>{title}</h1>
            <p>{des}</p>
            <div className="btn-container">
                <Button  variant="secondary" className="px-5 py-3"><PlayFill />Paly</Button>
                <Button variant="light" className="px-5 py-3 ml-3">More Info</Button>
            </div>
        </div>
    )
}

export default VideoTitle;
