import firebase from 'firebase';

export interface CourierOrderRequest {
  situation: 'pending' | 'accepted' | 'rejected' | 'expired';
  orderId: string;
  fee: number;
  distanceToOrigin: number;
  distance: number;
  originAddress: string;
  destinationAddress: string;
  readyAt?: Date;
  createdOn: firebase.firestore.FieldValue;
  updatedOn?: firebase.firestore.FieldValue;
}
