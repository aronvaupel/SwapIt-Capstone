import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StartPage from './pages/StartPage/StartPage';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/start">
          <StartPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
