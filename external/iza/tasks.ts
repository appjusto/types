import { LatLng } from '../../platform';

export interface IzaBaseTaskPayload {
  courierId: string;
  orderId: string;
}

export interface IzaStartTaskPayload extends IzaBaseTaskPayload {
  action: 'start';
  doc: string;
  birthday: string;
  name: string;
}

export interface IzaFinishTaskPayload extends IzaBaseTaskPayload {
  action: 'finish';
}

export interface IzaCancelTaskPayload extends IzaBaseTaskPayload {
  action: 'cancel';
}

export interface IzaUpdateLocationTaskPayload extends IzaBaseTaskPayload {
  action: 'update-location';
  location: LatLng;
  doc: string;
}

export type IzaTaskPayload =
  | IzaStartTaskPayload
  | IzaFinishTaskPayload
  | IzaCancelTaskPayload
  | IzaUpdateLocationTaskPayload;
