import { Timestamp } from '../external/firebase';
import { ClientFlavor } from '../platform';

export interface ProfileNoteWarehouse {
  flavor: ClientFlavor;
  profileId: string;
  note: string;
  staffEmail: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
