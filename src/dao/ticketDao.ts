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
    const testdata = await  TicketModel.findOneAndUpdate(
        { _id: id },
        body,
        { upsert: true },
        function (res, err) {
          console.log("res --->", res);
          return res;
        }
      );
      return testdata;

      //  const ticket = await TicketModel.findById(id);
      //   console.log("check ----> ", ticket)
      //   if (ticket !== null) {
      //     ticket.movieName = body.movieName;
      //     ticket.movieStartTime = body.movieStartTime;
      //     ticket.movieEndTime = body.movieEndTime;
      //     await TicketModel.updateOne(ticket);
      //     return ticket
      //   } else {
      //     return { message: "no Ticket Found for ID" };
      //   }
    } catch (err) {
      console.log("test data  --. ", err);
      return { message: "error occured while update" };
    }
  }
}
