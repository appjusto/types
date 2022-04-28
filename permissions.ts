type CRUD = 'c' | 'r' | 'u' | 'd';

export type UserPermissionRules = CRUD[];

export type UserPermissions = {
  [key: string]: UserPermissionRules;
};

export type NewUserData = {
  email: string;
  permissions: UserPermissions;
};
