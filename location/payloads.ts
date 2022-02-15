import { BasePayload, Flavor, LatLng } from '..';

export interface GoogleMapsPlacesAutocompletePayload extends BasePayload {
  operation: 'autocomplete';
  input: string;
  sessionToken: string;
  coords?: LatLng;
}
export interface GoogleMapsGeocodePayload extends BasePayload {
  operation: 'geocode';
}

export interface GoogleMapsReverseGeocodePayload extends BasePayload {
  operation: 'reverse-geocode';
}

export type QueryGoogleMapsPayload = {
  flavor: Flavor;
} & (
  | GoogleMapsPlacesAutocompletePayload
  | GoogleMapsGeocodePayload
  | GoogleMapsReverseGeocodePayload
);
