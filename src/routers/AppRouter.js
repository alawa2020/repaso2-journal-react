import { useEffect, useState } from 'react';

import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';

import { auth } from '../firebase/config';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { doAuthLogin } from '../actions/authActions';
import { startLoadNotes } from '../actions/notesActions';

export const AppRouter = () => {
  //hooks
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(doAuthLogin(user.uid, user.displayName));
        setIsAuth(true);
        dispatch(startLoadNotes());
      } else {
        setIsAuth(false);
      }
      setLoading(false);
    });
  }, [dispatch]);

  //otros

  if (loading) {
    return <h1> Loading...</h1>;
  }
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
