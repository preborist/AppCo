import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
        // console.log('response: ', response);
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
  // console.log('userStatistic: ', userStatistic);

  return (
    <div>
      {(() => {
        if (userStatistic.isLoading) {
          return <div>...loading</div>;
        }

        if (userStatistic.isError) {
          return <div>...error</div>;
        }
        return (
          <div>
            <h1></h1>
            <UserChart userData={userStatistic.data} />
          </div>
        );
      })()}
    </div>
  );
};

export default CurrentUserPage;
