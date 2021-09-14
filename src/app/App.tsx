import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import OptionsPage from './pages/OptionsPage/OptionsPage';
import StartPage from './pages/StartPage/StartPage';
import LogInPage from './pages/LogInPage/LogInPage';

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
          <main>sign in</main>
        </Route>
        <Route path="/logIn">
          <LogInPage />
        </Route>
        <Route path="/Proposals">
          <main>Proposals</main>
        </Route>
        <Route path="/add">
          <main>Add</main>
        </Route>
        <Route path="/">
          <main>Home</main>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
