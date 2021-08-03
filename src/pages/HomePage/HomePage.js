import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import SubscribeForm from '../../components/SubscribeForm/';

const HomePage = () => (
  <>
    {/* HEADER */}
    <header>
      <Link to="/">AppCo</Link>
    </header>

    <main>
      {/* HERO SECTION */}
      <section className="hero">
        <h2>
          <span>Brainstorming</span> for desired perfect Usability
        </h2>
        <p>
          Our design projects are fresh and simple and will benefit your
          business greatly. Learn more about our work!
        </p>
        <Link to="/users">Views Stats</Link>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <h2>
          Why <span>small business owners love</span> AppCo?
        </h2>
        <p>
          Our design projects are fresh and simple and will benefit your
          business greatly. Learn more about our work!
        </p>
        <ul>
          <li>
            <svg></svg>
            <h3>Clean Design</h3>
            <p>Increase sales by showing true dynamics of your website.</p>
          </li>
          <li>
            <svg></svg>
            <h3>Secure Data</h3>
            <p>Build your online store’s trust using Social Proof & Urgency.</p>
          </li>
          <li>
            <svg></svg>
            <h3>Retina Ready</h3>
            <p>
              Realize importance of social proof in customer’s purchase
              decision.
            </p>
          </li>
        </ul>
      </section>
      <SubscribeForm />
    </main>
    {/* FOOTER */}
    <footer className="footer">
      <Link to="/">AppCo</Link>
      <p>All rights reserved by ThemeTags</p>
      <p>Copyrights &copy; 2021.</p>
    </footer>
  </>
);

export default HomePage;
