import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Futured from "../Futured/Futured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testomonials from "../Testomonials/Testomonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Futured></Futured>
      <Testomonials></Testomonials>
    </div>
  );
};

export default Home;
