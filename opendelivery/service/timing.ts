export type ServiceTimingType = 'INSTANT' | 'SCHEDULED';

export interface ServiceTiming {
  /**
   * Indicates whether the service accepts orders with immediate delivery or scheduled delivery. Please inform all accepted types in the field.
   * If not informed, defaults to the INSTANT option.
   */
  timing?: ServiceTimingType;

  /**
   * Information regarding the time windows for scheduling.
   */
  schedule?: ServiceSchedule;
}

export type ScheduleTimeWindow =
  | '15_MINUTES'
  | '30_MINUTES'
  | '45_MINUTES'
  | '60_MINUTES'
  | '90_MINUTES'
  | '120_MINUTES';

export interface ServiceSchedule {
  /**
   * Time window where scheduling will be possible.
   * Example: If 15_MINUTES is chosen, then the available scheduling times will be displayed every 15 minutes (e.g. 9:15, 9:30, 9:45, 10:00).
   */
  scheduleTimeWindow: ScheduleTimeWindow;

  /**
   * Informs how long after the merchant has opened (considering the serviceHours entity) the first schedule time will be displayed.
   * Example: Service starts at 9:00 and the option 45_MINUTES was entered, then the first available time for scheduling will be 9:45.
   */
  scheduleStartWindow: ScheduleTimeWindow;

  /**
   * Informs how long before the merchant closes (considering the serviceHours entity) the last schedule time will be displayed.
   * Example: Service ends at 23:00 and the option 60_MINUTES was entered, then the last available time for scheduling will be 22:00
   */
  scheduleEndWindow: ScheduleTimeWindow;
}
