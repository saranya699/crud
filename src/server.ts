import cors from "cors";
import express from "express";
import { MongoConfig } from "./config/mongoConfig";
import Logger from "./config/logger";
import { TicketRoute } from "./routes/ticketRouter";
import { UserRoute } from "./routes/userRouter";
import bodyParser from "body-parser";


const app: express.Application = express();
const ticket = new TicketRoute();
console.log("ticket");
const user = new UserRoute();
console.log("user");

app.use(cors());
app.use(bodyParser.json());
new MongoConfig();
ticket.ticketRouter(app);

user.userRouter(app);

 app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
 
export default app;
  

  
