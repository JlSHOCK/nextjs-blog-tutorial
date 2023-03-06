import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { attributes as HomeContent } from '../content/home.md';

const Home = () => {
  return (
    <Layout
      pageClass="home"
      title="Home"
      description=""
    >
      <section className="hero">
        <img src={HomeContent.heroImage ? HomeContent.heroImage : "/images/test.jpg"} className="hero-bg-img" />
        <div className={`container`}>
          <h1 className={`title size-h-xxl weight-600`}>{HomeContent ? HomeContent.title : "Hello World"}</h1>
          {
            HomeContent.bullets &&
            <ul className={`bullets`}>
              {
                HomeContent.bullets.map((bullet, index) => {
                  return (
                    <li className={'bullet size-p-l weight-500'} key={`bullet-${index}`}>• {bullet.bullet}</li>
                  );
                })
              }
            </ul>
          }
          {
            HomeContent.buttons &&
            <div className={`cta_btns`}>
              {
                HomeContent.buttons.map((button, index) => {
                  return (
                    <button className="cta_btn" key={`button-${index}`}>
                      <Link href={button.ctaLink}>
                        <a className="cta_btn_link size-p-m weight-800">
                          {button.ctaTitle}
                        </a>
                      </Link>
                    </button>
                  );
                })
              }
            </div>
          }
        </div>
      </section>
    </Layout >
  );
}


export default Home;
