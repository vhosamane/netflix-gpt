const ImageContent = ({data}) => {
    return (
        <>
            <div className={`article-section ${data.imageAlignment}`}>
                <div className="article-section--left">
                    <div className="font-size-48 fw-bold">{data.heading}</div>
                    <div className="font-size-20 my-4">{data.subHeading}</div>
                </div>
                <div className="article-section--right">
                    <img src={data.imagePath}  alt=""/>
                    {
                    data.videoPath &&
                        <video width={data.videoWidth} height={data.videoHeight} controls autoPlay muted loop>
                            <source src={data.videoPath} type="video/mp4"/>
                        </video>
                    }
                </div>
            </div>
            <div className="section-divider"></div>
        </>
    )
}

export default ImageContent
