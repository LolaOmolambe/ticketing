import { Subjects, Publisher, OrderCancelledEvent } from '@lolatickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
