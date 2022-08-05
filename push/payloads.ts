import { FieldValue } from 'firebase/firestore';
import { ClientFlavor, LatLng } from '../platform';
import { NotificationChannel } from '../profile/notifications';

export interface PushCampaign {
  name: string;
  to: ClientFlavor;
  channel: NotificationChannel;
  nearby?: {
    coordinates: LatLng;
    radius: number;
  };
  title: string;
  body: string;
  status: 'pending' | 'submitted' | 'approved' | 'rejected';
  scheduledTo: FieldValue;
  taskName?: string;
  audience?: number;
  createdOn: FieldValue;
  updatedOn?: FieldValue;
}
