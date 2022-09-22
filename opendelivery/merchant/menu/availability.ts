import { DayOfWeek, TimePeriods } from '../service/hours';

/**
 * The Availability entity defines specific times and days to control the availability of Categories and Item offerings within the Menu. It is also possible to set special times for holidays.
 */
export interface Availability {
  /**
   * A unique identifier of the availability.
   */
  id: string;

  /**
   * Availability start date. If not informed, the availabilty is already avaliable.
   */
  startDate: string;

  /**
   * Availability end date. If not informed, the availabilty is always avaliable
   */
  endDate: string;

  /**
   * Hours
   */
  hours: [
    {
      /**
       * Day of the week for which these service hours are valid
       */
      dayOfWeek: DayOfWeek;

      /**
       * Time window from which users' orders can be placed.
       */
      timePeriods: TimePeriods;
    }
  ];
}
