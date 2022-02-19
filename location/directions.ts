import { LatLng } from '..';

export type RouteDetails = {
  origin: LatLng;
  destination: LatLng;
  distance: number; // in meters
  duration: number; // in seconds
  polyline: string;
};
