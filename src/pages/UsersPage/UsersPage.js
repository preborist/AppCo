import React from 'react';
import { useState, useEffect } from 'react';
import UsersTable from '../../components/UsersTable';

const useUsers = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:3000/users');

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
    getUsers();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const UsersPage = () => {
  const users = useUsers();

  return (
    <div>
      {(() => {
        if (users.isLoading) {
          return <div>...loading</div>;
        }

        if (users.isError) {
          return <div>...error</div>;
        }
        return <UsersTable data={users.data} />;
      })()}
    </div>
  );
};

export default UsersPage;
