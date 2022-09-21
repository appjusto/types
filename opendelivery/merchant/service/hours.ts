export type DayOfWeek =
  | 'MONDAY'
  | 'TUESDAY'
  | 'WEDNESDAY'
  | 'THURSDAY'
  | 'FRIDAY'
  | 'SATURDAY'
  | 'SUNDAY';

export interface ServiceHours {
  /**
   * 	A unique identifier of the service hours.
   */
  id: string;

  /**
   * A list of the day(s) of the week and time periods for which the service is valid.
   */
  weekHours: [
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
  /**
   * Map of holiday dates, each with optional timePeriods. If a date does not have a time period specified, the restaurant will be closed for that date.
   */
  holidayHours: [
    {
      date: string;
      timePeriods: TimePeriods;
    }
  ];
}

export interface TimePeriods {
  /**
   * Indicates the specific time of day in ISO format starting from which users' orders can be placed.
   */
  startTime: string;

  /**
   * Indicates the specific time of day in ISO format beyond which users' orders cannot be placed.
   */
  endTime: string;
}
