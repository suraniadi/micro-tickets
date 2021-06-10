import { Subjects, Publisher, OrderCancelledEvent } from "@ticketssap/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
