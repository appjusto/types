export type NotificationChannel =
  | 'profile-update'
  | 'order-update'
  | 'order-chat'
  | 'status'
  | 'general'
  | 'marketing';

export type NotificationPreferences = NotificationChannel[];
