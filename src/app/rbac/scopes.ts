export enum Scopes {
  canCreate = 'Create',
  canEdit = 'Edit',
  canDelete = 'Delete',
  canView = 'View',
  canViewUnAuthorized = 'ViewUnAuthorized'
}

export type ScopesStrings = keyof typeof Scopes;

export type AllowedUserActionsType = {
  [Property in Scopes]: boolean;
};

const allowedUserActions = Object.values(Scopes).reduce((acc, scope) => {
  acc[scope] = false;
  return acc;
}, {}) as AllowedUserActionsType;
allowedUserActions.ViewUnAuthorized = true;
export { allowedUserActions };
