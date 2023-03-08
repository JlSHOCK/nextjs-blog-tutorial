import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { attributes as HomeContent } from '../content/home.md';
import SignUp from "../components/SignUp";

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
                          <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.847 14.997">
                            <path className="arrow-fill" d="M4259.164,3718.387l7.5-7.5-7.5-7.5-.983.984,5.819,5.819h-12.185v1.391H4264l-5.819,5.819Z" transform="translate(-4251.815 -3703.391)" />
                          </svg>
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
      <SignUp />
    </Layout >
  );
}


export default Home;
