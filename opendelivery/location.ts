export interface LatLng {
  /**
   * Latitude in degrees. Values are restricted to the range [[-90, 90]].
   * The precision should be at least 5 decimal places (multipleOf: 0.00001).
   */
  latitude: number;

  /**
   * Longitude in degrees. Values are restricted to the range [[-90, 90]].
   * The precision should be at least 5 decimal places (multipleOf: 0.00001).
   */
  longitude: number;
}
