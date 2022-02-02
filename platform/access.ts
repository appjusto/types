export interface PlatformAccess {
  maintenance: {
    active: boolean;
    icon?: string | null;
    header?: string | null;
    body?: string[] | null;
  };
  minVersions: {
    consumer: string | null;
    courier: string | null;
  };
}