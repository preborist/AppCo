import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UsersTable from '../../components/UsersTable';
import './UsersPage.scss';
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
      <Link className="logo users" to="/">
        <h1>AppCo</h1>
      </Link>
      <div className="users-page-container">
        <nav className="navigation-bar">
          <Link className="link secondary" to="/">
            Main page<span>&#62;</span>
          </Link>
          <Link className="link primary" to="/users">
            Users statistics
          </Link>
        </nav>
        <h2 className="title">Users statistics</h2>
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

export default UsersPage;
