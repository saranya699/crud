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

  public async getTicketById(id: string) {
    const ticket = await TicketModel.findOne({ _id: id });
    if (ticket !== null) {
      return ticket;
    } else {
      return { message: "Expected ID Not Found" };
    }
  }

  public async updateOneTicket(id: string, body: TicketModel) {
    try {
      const testdata = await TicketModel.findOneAndUpdate(
        { _id: id },
         body,
        { upsert: true },
        function (res, err) {
          console.log("res --->", res);
          return res;
        }
      );
      return testdata;
    } catch (err) {
      console.log("test data  --. ", err);
      return { message: "error occured while update" };
    }
  }

  public async getAllTicketByStatus(status: string) {
    try {
      const ticket = await TicketModel.find({ status: status });
      return ticket;
    } catch (err) {
      return { message: "error massage occured" };
    }
  }
}
