import { Timestamp } from '../external/firebase';
import { ClientFlavor } from '../platform';

export interface ProfileNoteWarehouse {
  note: string;
  staffEmail: string;
  flavor: ClientFlavor;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
