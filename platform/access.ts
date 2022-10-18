export interface PlatformAccess {
  maintenance: {
    active: boolean;
    icon?: string | null;
    header?: string | null;
    body?: string[] | null;
  };
  currentVersions: {
    consumer: string | null;
    courier: string | null;
    businessWeb: string | null;
    businessApp: string | null;
  };
  minVersions: {
    consumer: string | null;
    courier: string | null;
    businessWeb: string | null;
    businessApp: string | null;
  };
}
