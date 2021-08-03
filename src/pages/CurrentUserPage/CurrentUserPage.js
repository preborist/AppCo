import { useState, useEffect } from 'react';
import UserСhart from '../../components/UsersTable';

const useUserStatistic = userId => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getUserStatistic = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:3000/users/${userId}`);

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
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const CurrentUserPage = userId => {
  const userStatistic = useUserStatistic();

  return (
    <div>
      {(() => {
        if (userStatistic.isLoading) {
          return <div>...loading</div>;
        }

        if (userStatistic.isError) {
          return <div>...error</div>;
        }
        return <UserСhart data={userStatistic.data} />;
      })()}
    </div>
  );
};

export default CurrentUserPage;
