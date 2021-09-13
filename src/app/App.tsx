import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage/SignInPage';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/SignIn">
          <SignInPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
