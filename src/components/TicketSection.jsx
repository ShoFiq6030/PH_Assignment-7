import React, { use } from "react";
import Card from "./Card";

export default function TicketSection({ data, onTicketCardClick }) {
  const tickets = use(data);

  console.log(tickets);

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4"> Customer Tickets</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {" "}
        {tickets.map((ticket) => (
          <Card
            key={ticket.id}
            ticket={ticket}
            onTicketCardClick={onTicketCardClick}
          />
        ))}
      </div>
    </div>
  );
}
