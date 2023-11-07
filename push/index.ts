import { Timestamp } from '../external/firebase';
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
  url?: string;
  createdOn: Timestamp;
  updatedOn?: Timestamp;
}
