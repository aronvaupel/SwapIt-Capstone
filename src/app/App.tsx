import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import OptionsPage from './pages/OptionsPage/OptionsPage';
import AddPage from './pages/AddPage/AddPage';
import MainPage from './pages/MainPage/MainPage';
import SignInPage from './pages/SignInPage/SignInPage';
import StartPage from './pages/StartPage/StartPage';
import MatchPage from './pages/MatchPage/MatchPage';
import LogInPage from './pages/LogInPage/LogInPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <MainPage />
        </Route>
        <Route path="/options">
          <OptionsPage />
        </Route>
        <Route path="/signIn">
          <SignInPage />
        </Route>
        <Route path="/logIn">
          <LogInPage />
        </Route>
        <Route path="/proposals">
          <MatchPage />
        </Route>
        <Route path="/add">
          <AddPage />
        </Route>
        <Route path="/">
          <StartPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
