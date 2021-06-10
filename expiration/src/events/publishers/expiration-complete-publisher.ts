import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@ticketssap/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
