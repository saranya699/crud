import mongoose from "mongoose";
import { ticketSchema, TicketModel } from "../model/ticketModel";
import Logger from "../config/logger";
const TicketModel = mongoose.model("Ticket", ticketSchema);
export class TicketDao {
  public async ticketCreate(body: TicketModel) {
    const ticket = new TicketModel(body);
    return await ticket.save();
  }
  public async getTicket() {
    const ticketData = await TicketModel.find();
    return ticketData;
  }
  public async updateOneTicket(id: string, body: TicketModel) {
    try {
      const ticketFound = await TicketModel.findByIdAndUpdate(id,body);
      
      
      console.log("ticketFound", ticketFound);
      if (!ticketFound) {
        Logger.error("ticket not found");
        return "ticket not found";
      }
      return ticketFound;
    } catch (err) {
      
      return { message: "error occured" };
    }
  }
}
