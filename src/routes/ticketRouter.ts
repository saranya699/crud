import express from "express";
import { TicketController } from "../controller/ticketController";

let ticketController: TicketController;

export class TicketRoute {
  constructor() {
    ticketController = new TicketController();
  }

  ticketRouter(app: express.Application) {
    app.post("/ticket", ticketController.ticketCreate);
    app.get("/ticket", ticketController.getTicket);
    app.get("/ticket/:id", ticketController.getTicketById);
    app.put("/ticket/:id", ticketController.updateOneTicket);
    app.get("/tickets/:status", ticketController.getAllTicketByStatus);
  }
}
