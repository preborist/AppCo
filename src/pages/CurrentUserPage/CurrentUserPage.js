import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './CurrentUserPage.scss';

import Loader from '../../components/Loader';
import UserChart from '../../components/UserСhart';

const useUserStatistic = () => {
  let location = useLocation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getUserStatistic = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `http://localhost:3000${location.pathname}`,
        );

        const { results } = await response.json();
        setData(results);

        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getUserStatistic();
  }, [location.pathname]);

  return {
    data,
    isLoading,
    isError,
  };
};

const CurrentUserPage = () => {
  const userStatistic = useUserStatistic();
  return (
    <div>
      <Link className="logo users" to="/">
        <h1>AppCo</h1>
      </Link>
      <div className="users-page-container current">
        <Link className="link secondary" to="/">
          Main page <span>&#62; </span>
        </Link>
        <Link className="link secondary" to="/users">
          Users statistics <span>&#62; </span>
        </Link>

        {(() => {
          if (userStatistic.isLoading) {
            return <Loader />;
          }

          if (userStatistic.isError) {
            return <div>...error</div>;
          }
          return (
            <>
              <UserChart userData={userStatistic.data} />
            </>
          );
        })()}
      </div>
      <footer className="footer users">
        <Link className="footer-logo link" to="/">
          AppCo
        </Link>
        <p className="footer-text">All rights reserved by ThemeTags</p>
        <p className="footer-text">Copyrights &copy; 2021.</p>
      </footer>
    </div>
  );
};

export default CurrentUserPage;
