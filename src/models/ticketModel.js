const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports.ticketSchema = new Schema({
  ticketId: String,
  movieName: String,
  movieStartTime: Date,
  movieEndTime: Date,
  status: String,
  createdAt: Date,
  updatedAt: Date
});
