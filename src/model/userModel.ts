import mongoose from "mongoose";
import { TicketModel } from "./ticketModel";

const { Schema } = mongoose;

export interface UserModel {
  userId: String;
  firstName: String;
  lastName: String;
  address: Object;
  mobileNumber: Number;
  dateOfBirth: Number;
  ticketIds: [String];
}

export const userSchema = new Schema({
  userId: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String },
  address: { type: Object },
  mobileNumber: { type: Number },
  dateOfBirth: { type: Number },
  ticketIds: [{ type: String }],
});
