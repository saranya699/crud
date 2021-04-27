import mongoose from "mongoose";

export class MongoConfig {
  constructor() {
    mongoose
      .connect(
        "mongodb+srv://saranya:saranya@cluster0.4btho.mongodb.net/saraDb?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
      )
      .then(() => {
        console.log("DB Connnected");
      })
      .catch(() => {
        console.log("Err on connection");
      });
  }
}
