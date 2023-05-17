export type PlatformAdminComponent =
  | 'admin-web'
  | 'admin-desktop'
  | 'admin-mobile';

export type PlatformComponent =
  | PlatformAdminComponent
  | 'backoffice'
  | 'courier-mobile'
  | 'consumer-mobile';

export type ExternalComponent = 'hubster' | 'marketup';
