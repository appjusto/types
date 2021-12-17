export interface PlatformAccess {
  maintenance: {
    active: boolean;
    header?: string | null;
    body?: string[] | null;
  };
  minVersions: {
    consumer: string | null;
    courier: string | null;
  };
}
