import { Subjects, Publisher, PaymentCreatedEvent } from "@ticketssap/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
