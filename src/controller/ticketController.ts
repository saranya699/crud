import { Request, Response } from "express";
import { TicketService } from "../service/ticketService";
import { TicketModel } from "../model/ticketModel";
import Logger from "../config/logger";

let ticketService: TicketService;

export class TicketController {
  constructor() {
    ticketService = new TicketService();
  }

  public async ticketCreate(req: Request, res: Response) {
    Logger.info("create ticket");
    try {
      const ticket = await ticketService.ticketCreate(req.body);
      res.status(200).json(ticket);
    } catch (err) {
      if (err && err._message && err._message === "validation failed") {
        res.status(400).send(err);
      } else {
        Logger.error(err);
        res.status(500).send(err);
      }
    }
  }

  public async getTicket(req: Request, res: Response) {
    Logger.info("get information about the movie");
    try {
      const tickets = await ticketService.getTicket();
      res.status(200).json(tickets);
    } catch (err) {
      res.status(500).send(err);
    }
  }
  public async getTicketById(req: Request, res: Response) {
    Logger.info("get ticket by id");
    try {
      const id = req.params.id;
      const tickets = await ticketService.getTicketById(id);
      res.status(200).json(tickets);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  public async updateOneTicket(req: Request, res: Response) {
    Logger.info("update ticket by id");
    try {
      const ticketData = req.body;
      const ticketId = req.params.id;

      console.log(ticketId, "------->", ticketData);

      const ticket = await ticketService.updateOneTicket(ticketId, ticketData);
      res.status(200).json(ticket);
    } catch (err) {
      if (err && err._message && err._message === "validation failed") {
        res.status(400).send(err);
      } else {
        res.status(500).send(err);
      }
    }
  }
  public async getAllTicketByStatus(req: Request, res: Response) {
    Logger.error("if the ticket is active otherwise it throws an error");

    try {
      const ticketstatus = req.params.status;

      const status = await ticketService.getAllTicketByStatus(ticketstatus);
      res.status(200).json(status);
    } catch (err) {
      res.status(500).send(err);
    }
  }
}
