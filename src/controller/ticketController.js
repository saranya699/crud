const dbConfig = require("../config/db");
const ticketService = require("../service/ticketService");

module.exports.create = async (event, context, callback) => {
  await dbConfig.connect();
  const res = await ticketService.create(JSON.parse(event.body));
  console.log("doc");
  callback(null, {
    success: true,
    status: 200,
    body: JSON.stringify(res),
  });
};
module.exports.getTicket = async (event, context, callback) => {
  await dbConfig.connect();
  const res = await ticketService.getTicket(JSON.parse);
  callback(null, {
    success: true,
    status: 200,
    body: JSON.stringify(res),
  });
};
module.exports.updateOneTicket = async (event, context, callback) => {
  await dbConfig.connect();
  const ticketData = event.body;
  const ticketId = event.pathParameters.id;
  const res = await ticketService.updateOneTicket(ticketId,JSON.parse(ticketData));
  callback(null, {
    success: true,
    status: 200,
    body: JSON.stringify(res),
  });
};
module.exports.getTicketById = async (event, context, callback) => {
  await dbConfig.connect();
 const ticketId = event.pathParameters.id;
  const res = await ticketService .getTicketById(ticketId,JSON.parse);
  callback(null, {
    success: true,
    status: 200,
    body: JSON.stringify(res),
  });
};
module.exports.getAllTicketById = async (event, context, callback) => {
  await dbConfig.connect();
 const ticketstatus = event.pathParameters.status;
  const res = await ticketService .getAllTicketById(ticketstatus,JSON.parse);
  callback(null, {
    success: true,
    status: 200,
    body: JSON.stringify(res),
  });
};
