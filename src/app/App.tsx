import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddPage from './pages/AddPage/AddPage';
import OptionsPage from './pages/OptionsPage';
import StartPage from './pages/StartPage/StartPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/start">
          <StartPage />
        </Route>
        <Route path="/options">
          <OptionsPage />
        </Route>
        <Route path="/signIn">
          <h1>signIn</h1>
        </Route>
        <Route path="/logIn">
          <main>Log in</main>
        </Route>
        <Route path="/Proposals">
          <main>Proposals</main>
        </Route>
        <Route path="/add">
          <AddPage />
        </Route>
        <Route path="/">
          <main>Home</main>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
