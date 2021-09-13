import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OptionsPage from './pages/OptionsPage';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/options">
          <OptionsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
