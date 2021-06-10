import { Publisher, Subjects, TicketCreatedEvent } from "@ticketssap/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
