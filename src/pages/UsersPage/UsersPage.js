import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UsersTable from '../../components/UsersTable';
import axios from 'axios';

const useUsers = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:3000/users`);
        console.log('response: ', response);

        const { results } = await response.json();
        // const { usersData, statistics } = results;
        console.log('results: ', results);
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
      <Link to="/">
        Main page <span>&#62; </span>
      </Link>
      <Link to="/users">Users statistics</Link>

      <h2>Users statistics</h2>
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
