import React from 'react';
import { Link } from 'react-router-dom';

import SubscribeForm from '../../components/SubscribeForm/';
import './HomePage.scss';
import mobile from './mobile.png';
import design from './design.svg';
import data from './data.svg';
import retina from './retina.svg';

const HomePage = () => (
  <>
    <main>
      <div className="hero-container">
        <section className="hero">
          <Link className="logo" to="/">
            <h1>AppCo</h1>
          </Link>
          <div className="my-wrapper">
            <div className=" subwrapper ">
              <h2 className="hero-subtitle">
                <span>Brainstorming</span> for desired perfect Usability
              </h2>
              <p className="hero-description">
                Our design projects are fresh and simple and will benefit your
                business greatly. Learn more about our work!
              </p>
              <Link to="/users">
                <button className="stat-button" type="button">
                  Views Stats
                </button>
              </Link>
            </div>
            <Link to="#" className="mobile-link">
              <img src={mobile} alt="mobile" />
            </Link>
          </div>
        </section>
      </div>

      {/* FEATURES SECTION */}
      <section className="features">
        <h2 className="features-title">
          Why <span>small business owners love</span> AppCo?
        </h2>
        <p className="features-description">
          Our design projects are fresh and simple and will benefit your
          business greatly. Learn more about our work!
        </p>
        <ul className="features-list list">
          <li className="features-list-item">
            <img
              className="features-list-item-image"
              src={design}
              alt="design"
              width="106"
            ></img>
            {/* <svg></svg> */}
            <h3 className="features-list-item-title">Clean Design</h3>
            <p className="features-list-item-description">
              Increase sales by showing true dynamics of your website.
            </p>
          </li>
          <li className="features-list-item">
            <img
              className="features-list-item-image"
              src={data}
              alt="Кот"
              width="106"
            ></img>
            <h3 className="features-list-item-title">Secure Data</h3>
            <p className="features-list-item-description">
              Build your online store’s trust using Social Proof & Urgency.
            </p>
          </li>
          <li className="features-list-item">
            <img
              className="features-list-item-image"
              src={retina}
              alt="Кот"
              width="106"
            ></img>
            <h3 className="features-list-item-title">Retina Ready</h3>
            <p className="features-list-item-description">
              Realize importance of social proof in customer’s purchase
              decision.
            </p>
          </li>
        </ul>
      </section>
    </main>
    {/* FOOTER */}
    <div className="footer-wrapper">
      <SubscribeForm />
      <footer className="footer ">
        <Link className="footer-logo link" to="/">
          AppCo
        </Link>
        <p className="footer-text">All rights reserved by ThemeTags</p>
        <p className="footer-text">Copyrights &copy; 2021.</p>
      </footer>
    </div>
  </>
);

export default HomePage;
