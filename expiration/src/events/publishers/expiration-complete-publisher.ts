import {
    Subjects,
    Publisher,
    ExpirationCompleteEvent,
  } from '@lolatickets/common';
  
  export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
  }
  