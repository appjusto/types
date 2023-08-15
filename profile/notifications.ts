import { ClientFlavor } from '../platform';

export type NotificationChannel =
  | 'profile-update'
  | 'order-update'
  | 'order-request'
  | 'order-chat'
  | 'status'
  | 'general'
  | 'marketing';

export type NotificationPreferences = NotificationChannel[];
export interface UpdateNotificationPreferencesPayload {
  flavor: ClientFlavor;
  id: string;
  notificationPreferencesToken: string;
  notificationPreferences: NotificationPreferences;
}
