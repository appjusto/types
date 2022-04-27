type CRUD = 'create' | 'read' | 'update' | 'delete';

export type UserPermissionRules = CRUD[];

export type UserPermissions = {
  [key: string]: UserPermissionRules;
};

export type NewUserData = {
  email: string;
  permissions: UserPermissions;
};
