import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/start">
          <main>Start</main>
        </Route>
        <Route path="/options">
          <main>pls select an option</main>
        </Route>
        <Route path="/signIn">
          <main>sign in</main>
        </Route>
        <Route path="/logIn">
          <main>Log in</main>
        </Route>
        <Route path="/Proposals">
          <main>Proposals</main>
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
