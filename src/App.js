import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import Header from './components/Header';
import Container from './components/Container';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Home from './pages/HomePage';
import { authOperations, authSelectors } from './redux/auth';
import CircularProgress from '@mui/material/CircularProgress';
import style from './App.css';

const Login = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const Signup = lazy(() =>
  import('./pages/SignupPage' /* webpackChunkName: "signup-page" */),
);
const Contacts = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "contacts-page" */),
);

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      {isFetchingCurrentUser ? (
        <CircularProgress />
      ) : (
        <Switch>
          <PublicRoute path="/" exact redirectTo="/contacts" restricted>
            <Home />
          </PublicRoute>

          <Suspense
            fallback={
              <div className={style.box}>
                <CircularProgress />
              </div>
            }
          >
            <PublicRoute path="/login" redirectTo="/contacts" restricted>
              <Login />
            </PublicRoute>
            <PublicRoute path="/register" redirectTo="/contacts" restricted>
              <Signup />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <Contacts />
            </PrivateRoute>
          </Suspense>
        </Switch>
      )}
    </Container>
  );
}

export default App;
