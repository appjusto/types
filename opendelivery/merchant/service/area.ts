import { LatLng } from '../../location';
import { Price } from '../../price';

export interface ServiceArea {
  /**
   * A unique identifier of the service area.
   */
  id: string;

  /**
   * If the polygon is chosen to be used, geoRadius is not required.
   * A polygon or multipolygon expressed as a series of three or more space delimited points.
   */
  polygon?: [
    {
      /**
       * Coordinates of each point of the polygon. It is recommended that the first and last points be the same, but it is not required.
       * Each point in a polygon or multipolygon is defined by a latitude point followed by a longitude point. You also must specify the points in a counter-clockwise direction.
       */
      geoCoordinates: LatLng[];

      /**
       * Price of the fee for this polygon
       */
      price?: Price;

      /**
       * Estimate delivery time for this polygon in minutes
       */
      estimateDeliveryTime?: number;
    }
  ];

  geoRadius?: {
    /**
     * Indicates the latitude coordinate at the center of the CIRCLE area.
     * Latitude in degrees. Values are restricted to the range [[-90, 90]].
     * The precision should be at least 5 decimal places (multipleOf: 0.00001).
     */
    geoMidpointLatitude: number;

    /**
     * Indicates the longitude coordinate at the center of the CIRCLE area.
     * Latitude in degrees. Values are restricted to the range [[-90, 90]].
     * The precision should be at least 5 decimal places (multipleOf: 0.00001).
     */
    geoMidpointLongitude: number;

    /**
     * Informations about each radius of the CIRCLE that the merchant serves.
     */
    radius: [
      {
        /**
         * The size of the CIRCLE radius in meters.
         */
        size: number;

        /**
         * Price of the fee for this CIRCLE size.
         */
        price: Price;

        /**
         * Estimate delivery time for this CIRCLE size in minutes.
         */
        estimateDeliveryTime: number;
      }
    ];
  };
}
