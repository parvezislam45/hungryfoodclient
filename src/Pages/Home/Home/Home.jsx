import { Helmet } from "react-helmet-async";
import Banner from "../Banner";
import Category from "../Category";
import Features from "./Features";
import PopularItem from "./PopularItem";
import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div>
             <Helmet>
        <title>Hungry Hunter | Home</title>
      </Helmet>
            <Banner/>
            <Category/>
            <PopularItem/>
            <Features/>
            <Testimonial/>
        </div>
    );
};

export default Home;