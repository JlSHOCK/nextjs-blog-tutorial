import React from "react";
import Layout from "../components/Layout";
import { attributes as HomeContent } from '../content/home.md';
console.log(HomeContent)
const Home = () => {
  return (
    <Layout
      pageClass="home"
      title="Home"
      description=""
    >
      <section className="hero">
        {HomeContent && <img src={HomeContent.heroImage ? HomeContent.heroImage : "/images/test.jpg"} className="hero-bg-img" />}
        <div className={`container`}>
          <h1 className={`title size-h-xxl weight-600`}>{HomeContent ? HomeContent.title : "Hello World"}</h1>
        </div>
      </section>
    </Layout >
  );
}


export default Home;
