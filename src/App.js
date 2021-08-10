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

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
