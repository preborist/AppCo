import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import Container from './components/Container';
import HomePage from './pages/HomePage';
import CurrentUserPage from './pages/CurrentUserPage';
import UsersPage from './pages/UsersPage';

export default function App() {
  return (
    <Container>
      <Switch>
        <HomePage exact path="/" />
        <CurrentUserPage path="/users/:userId" />
        <UsersPage path="/users" />
      </Switch>
    </Container>
  );
}
