import mongoose from "mongoose";

const { Schema } = mongoose;

export interface TicketModel {
  ticketId: String;
  movieName: String;
  movieStartTime: Date;
  movieEndTime: Date;
  status: String;
  createdAt: Date;
  updatedAt: Date;
}

export const ticketSchema = new Schema({
  ticketId: { type: String },
  movieName: { type: String, required: true },
  movieStartTime: { type: Date },
  movieEndTime: { type: Date },
  status: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});
