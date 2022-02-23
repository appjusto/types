import { BasePayload, CourierMode, Flavor, LatLng } from '..';

export interface BaseQueryGoogleMapsPayload extends BasePayload {
  flavor: Flavor;
}

export interface GoogleMapsPlacesAutocompletePayload
  extends BaseQueryGoogleMapsPayload {
  operation: 'autocomplete';
  input: string;
  sessionToken: string;
  coords?: LatLng;
}
export interface GoogleMapsGeocodePayload extends BaseQueryGoogleMapsPayload {
  operation: 'geocode';
  address: string;
}

export interface GoogleMapsReverseGeocodePayload
  extends BaseQueryGoogleMapsPayload {
  operation: 'reverse-geocode';
  coords: LatLng;
}

export interface GoogleMapsDirectionsPayload
  extends BaseQueryGoogleMapsPayload {
  operation: 'directions';
  origin: LatLng | string;
  destination: LatLng | string;
  mode: CourierMode;
}

export type QueryGoogleMapsPayload =
  | GoogleMapsPlacesAutocompletePayload
  | GoogleMapsGeocodePayload
  | GoogleMapsReverseGeocodePayload
  | GoogleMapsDirectionsPayload;
