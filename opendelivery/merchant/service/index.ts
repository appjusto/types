import { ServiceArea } from './area';
import { ServiceHours } from './hours';
import { ServiceTiming } from './timing';

export type ServiceStatus = 'AVAILABLE' | 'UNAVAILABLE';
export type ServiceType = 'DELIVERY' | 'TAKEOUT' | 'INDOOR';

export interface Service {
  /**
   * Unique Identifier (UUID)
   */
  id: string;

  /**
   * Indicates if the entity is Avaliable or Unavaliable. Only use this type when you must disable the entity due to an unexpected event and you don't know when the service will be re-established (e.g. do not use for holidays).
   */
  status: ServiceStatus;

  /**
   * The type of service being offered.
   */
  serviceType: ServiceType;

  /**
   * Information regarding the accepted service times.
   */
  serviceTiming?: ServiceTiming;

  /**
   * The id value of the Menu entity correlated to this Service entity.
   */
  menuId: string;

  /**
   * A conditional entity to implement (required if the Service entity associated has serviceType set to DELIVERY). Describes the geographical region in which food can be delivered.
   */
  serviceArea?: ServiceArea;

  /**
   * A required entity to implement. Describes the time window which users can place orders.
   */
  serviceHours: ServiceHours;
}
