import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
export const AppRouter = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <Switch>
        <PublicRoute path="/auth" component={AuthRouter} isAuth={isAuth} />

        <PrivateRoute
          exact
          path="/"
          component={JournalScreen}
          isAuth={isAuth}
        />

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
