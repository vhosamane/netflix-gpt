import { Container } from "react-bootstrap";
import { homePageData } from '../../data/homePageData';
import { faq } from "../../data/homePageData";
import ImageContent from "../ImageContent/ImageContent";
import Accordion from "../Accordion/Accordion";

const Home = () => {

    return (
        <Container fluid>
            <section className="section-signup">
                <div className="background-overlay"></div>

                <div className="article-signUp">
                    <h1>Unlimited movies, TV shows and more</h1>
                    <p className="text-center font-size-24 fw-bold">Watch anywhere. Cancel anytime</p>
                    <p className="text-center font-size-24 fw-bold">Ready to watch? Enter your email to create or restart your membership</p>
                </div>
            </section>
            <div className="section-divider"></div>
            <section className="article-container">
                {
                    homePageData.map((data, index) => (
                        <ImageContent key={index} data={data}/>
                    ))
                }
            </section>
            <section className="accordion-container">
                <h2 className="text-center font-size-48 mb-5">Frequently Asked Questions</h2>
                {
                    faq.map((data, index) => (
                        <Accordion key={index} data={data} />
                    ))
                }
            </section>
        </Container>
    )
}

export default Home;
