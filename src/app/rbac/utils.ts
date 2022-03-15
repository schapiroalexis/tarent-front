import { Scopes, AllowedUserActionsType } from 'app/rbac/scopes';

// this is a type guard check
const isArray = (params: string | string[]): params is string[] => {
  return Array.isArray(params) && typeof params[0] === 'string';
};

export const userHasRequiredScopes = ({
  requiredScopes,
  userActions
}: {
  requiredScopes: Scopes[];
  userActions: AllowedUserActionsType;
}) => {
  if (!requiredScopes.length) return true; //component has no required scopes
  const userHasAllRequirtedScopes = requiredScopes.some(requiredScope => userActions[requiredScope]);
  return userHasAllRequirtedScopes;
};
