import { Publisher, OrderCreatedEvent, Subjects } from '@lolatickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    readonly subject = Subjects.OrderCreated;
    
}