import { OutsourceAccountType } from '../../platform';
import { OrderPayload } from '../payloads';

export interface OutsourceDeliveryPayload extends OrderPayload {
  accountType?: OutsourceAccountType;
  isAuto?: boolean;
  priorityFee?: string;
  comment?: string;
}
