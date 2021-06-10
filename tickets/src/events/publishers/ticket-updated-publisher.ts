import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
  TicketUpdatedEvent,
} from "@ticketssap/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
