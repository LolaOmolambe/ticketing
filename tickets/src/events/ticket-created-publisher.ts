import { Publisher, Subjects, TicketCreatedEvent } from '@lolatickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
