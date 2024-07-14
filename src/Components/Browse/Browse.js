import MainContainer from "../MainContainer/MainContainer";
import SecondaryContanier from "../SecondaryContanier/SecondaryContanier";
import useNowPlaying from "../../utils/CustomHook/useNowPlaying";
import usePopular from "../../utils/CustomHook/usePopular";
import useTopRated from "../../utils/CustomHook/useTopRated";
import useUpComing from "../../utils/CustomHook/useUpComing";

const Browse = () => {

    useNowPlaying();
    usePopular();
    useTopRated();
    useUpComing();

    return (
        <div className="browse-page-wrapper">
            <MainContainer />
            <SecondaryContanier />
        </div>
    )
}

export default Browse;
