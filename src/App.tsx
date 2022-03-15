import { useCallback } from 'react';
import { v4 } from 'uuid';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme/Theme';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import ProtectedRoute from 'components/ProtectedRoute';
import NotFoundPage from 'features/NotFoundPage';

import { routesDict } from 'app/index';
import { RoutesDictType } from 'app/routes';

const App = () => {
  const generateRoutes = useCallback((routes: RoutesDictType) => {
    const notProtectedRoutes = Object.values(routes)
      .filter(element => element.type === 'public')
      .map(publicElement => (
        <Route
          exact
          //path={process.env.PUBLIC_URL !== '' ? `${process.env.PUBLIC_URL}${publicElement.to}` : `${publicElement.to}`}
          path={`${publicElement.to}`}
          component={publicElement.component}
          key={v4()}
        />
      ));

    const protectedRoutes = Object.values(routes)
      .filter(element => element.type === 'protected')
      .map(protectedElement => (
        <ProtectedRoute
          exact
          //path={process.env.PUBLIC_URL !== '' ? `${process.env.PUBLIC_URL}${protectedElement.to}` : `${protectedElement.to}`}
          path={`${protectedElement.to}`}
          component={protectedElement.component}
          key={v4()}
          requiredScopes={protectedElement.requiredScopes}
        />
      ));

    return notProtectedRoutes.concat(protectedRoutes);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/tarent">
        <Switch>
          {generateRoutes(routesDict)}
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
