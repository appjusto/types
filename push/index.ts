import { Timestamp } from 'firebase/firestore';
import { ClientFlavor, LatLng } from '../platform';
import { NotificationChannel } from '../profile/notifications';

export interface PushCampaign {
  name: string;
  to: ClientFlavor;
  channel: NotificationChannel;
  nearby?: {
    coordinates: LatLng;
    radius: number;
  } | null;
  title: string;
  body: string;
  status: 'submitted' | 'approved' | 'rejected';
  scheduledTo: Timestamp;
  taskNames?: string[];
  audience?: number;
  createdOn: Timestamp;
  updatedOn?: Timestamp;
}
