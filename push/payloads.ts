import { FieldValue } from 'firebase/firestore';
import { ClientFlavor, LatLng } from '../platform';
import { NotificationChannel } from '../profile/notifications';

export interface CreatePushCampaignPayload {
  name: string;
  to: ClientFlavor;
  channel: NotificationChannel;
  nearby?: {
    coordinates: LatLng;
    radius: number;
  };
  title: string;
  body: string;
  status: 'pending' | 'approved' | 'rejected';
  scheduledTo: FieldValue;
  taskName?: string;
  createdOn: FieldValue;
  updatedOn: FieldValue;
}
