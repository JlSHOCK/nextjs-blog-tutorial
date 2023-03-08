import React from "react";
import Layout from "../components/Layout";
import HomeHero from '../components/Pages/Home/HomeHero';
import SignUp from "../components/SignUp";

const Home = () => {
  return (
    <Layout
      pageClass="home"
      title="Home"
      description=""
    >
      <HomeHero />
      <SignUp />
    </Layout >
  );
}


export default Home;
