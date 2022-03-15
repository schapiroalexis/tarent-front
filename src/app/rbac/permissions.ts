import { UserRoles } from 'app/rbac/roles';
import { Scopes } from 'app/rbac/scopes';

export const permissions = {
  [UserRoles.superAdmin]: [Scopes.canCreate, Scopes.canDelete, Scopes.canEdit, Scopes.canView],
  [UserRoles.admin]: [Scopes.canView, Scopes.canEdit],
  [UserRoles.regularUser]: [Scopes.canView],
  [UserRoles.standardUser]: [Scopes.canView],
  [UserRoles.deliveryAdmin]: [Scopes.canView, Scopes.canEdit, Scopes.canCreate]
};

export const getPermissionsList = () => {
  const allPermissions = Object.values(permissions).reduce((mainAcc, scopes) => {
    let dummyAcc = { ...mainAcc };
    scopes.forEach(scope => (dummyAcc[scope] = true));
    return dummyAcc;
  }, {});

  return Object.keys(allPermissions);
};
