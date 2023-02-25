import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout
      pageClass="home"
      title="Home"
      description=""
    >
      <section>
        <div className={`container`}>
          <h1 className={`title size-h-xxl weight-600`}>Home</h1>
        </div>
      </section>
    </Layout >
  );
}


export default Home;
