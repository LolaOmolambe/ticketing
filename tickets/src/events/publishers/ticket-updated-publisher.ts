import { Publisher, Subjects, TicketUpdatedEvent } from '@lolatickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
