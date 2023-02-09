export interface IzaTaskPayload {
  action: 'start' | 'finish' | 'cancel' | 'update-location';
  courierId: string;
  orderId: string;
}
