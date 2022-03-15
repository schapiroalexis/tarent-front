import { useEffect, useMemo, useState } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import AuthenticatedUsersRoute from 'components/ProtectedRoute/AuthenticatedUsersRoute';
//import { getTokenKey } from 'app/auth/token';
import { PayloadAction } from '@reduxjs/toolkit';

import { AllowedUserActionsType, Scopes } from 'app/rbac/scopes';
import { userHasRequiredScopes } from 'app/rbac/utils';
import { BackDropSpinner } from 'components/Spinner';
import { routesDict } from 'app/routes';
// @alexis @todo: refactor protected route
// import UserManagerSvc from 'features/session/userMng';
// const { manager } = new UserManagerSvc();

const userIsValid = user => user !== null && user !== undefined && user.access_token !== undefined;

export type ProtectedRouteProps = {
  authenticationPath?: string;
  requiredScopes: Scopes[];
} & RouteProps;

//@alexis @todo: evaluar si volviendo a dejar las funciones sin los wrappers es mas performante el login. Antes no tardaba tanto en actualizar el estado. Puede estar en el login
export const ProtectedRoute = ({
  authenticationPath = '/login',
  children,
  requiredScopes,
  ...rest
}: ProtectedRouteProps) => {
  console.log('*** RENDERING ProtectedRoute ***');
  const dispatch = useAppDispatch();

  // this is absolut dummy data. isAUthenticated and sessionStatus will depend on login and auth process
  const isAuthenticated = true;
  const sessionStatus = isAuthenticated ? 'idle' : 'loading';

  return sessionStatus === 'loading' ? (
    <BackDropSpinner />
  ) : isAuthenticated ? (
    <AuthenticatedUsersRoute rest={rest} userHasTheRequiredScope={true} />
  ) : (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: rest.location }
      }}
    />
  );
};
