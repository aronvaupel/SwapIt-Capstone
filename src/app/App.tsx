import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import OptionsPage from './pages/OptionsPage/OptionsPage';
import SignInPage from './pages/SignInPage/SignInPage';
import StartPage from './pages/StartPage/StartPage';
import MatchPage from './pages/MatchPage/MatchPage';

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
          <SignInPage />
        </Route>
        <Route path="/logIn">
          <main>Log in</main>
        </Route>
        <Route path="/proposals">
          <MatchPage />
        </Route>
        <Route path="/add">
          <main>Add</main>
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
