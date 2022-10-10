import Header from "../components/Header";
import Hero from "../components/Hero";
import Carousel from "../components/HomeStepper";
import Layout from "../components/Layout";

const Home = (props) => {
  return (
    <Layout>
      <Header component="h1">Home</Header>
      <Hero />
      <Carousel />
    </Layout>
  );
};

export default Home;
