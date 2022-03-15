import { Redirect, Route } from 'react-router-dom';
import { AllowedUserActionsType, Scopes } from 'app/rbac/scopes';

type CmpProps = {
  rest: any;
  userHasTheRequiredScope: boolean;
};

const AuthenticatedUsersRoute = ({ rest, userHasTheRequiredScope }: CmpProps) => {
  return userHasTheRequiredScope ? (
    <Route {...rest} />
  ) : (
    <Redirect
      to={{
        //pathname: process.env.PUBLIC_URL !== '' ? `${process.env.PUBLIC_URL}/unauthorized` : '/unauthorized',
        pathname: '/unauthorized',
        state: { from: rest.location }
      }}
    />
  );
};

export default AuthenticatedUsersRoute;
