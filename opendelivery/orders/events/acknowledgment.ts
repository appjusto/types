/**
 * Acknowledge a set of events, dismissing them from future polling calls.
 * POST /v1/events/acknowledgment
 */

import { EventType } from '.';

export type PostEventsAcknowledgmentRequest = [
  {
    /**
     * A unique identifier of the event.
     */
    id: string;

    /**
     * The unique identifier of the order. The order ID is generated by the Ordering Application.
     */
    orderId: string;

    /**
     * The event type
     */
    eventType: EventType;
  }
];
