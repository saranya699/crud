const mongoose = require('mongoose');
const ticket = require('../models/ticketModel');
const ticketModel = mongoose.model('ticket', ticket.ticketSchema);

 module.exports.create = async (ticketData) => {
    const doc = await new ticketModel(ticketData);
    console.log("doc----->");
    return doc.save();
   
 }
 module.exports.getTicket = async () => {
    const value = await ticketModel.find();
    return value;
 }
 module.exports.updateOneTicket = async (id,body) => {
    try {
       console.log(id,body)
      const testdata = await ticketModel.findOneAndUpdate(
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
 module.exports.getTicketById = async (id) => {
    const ticket = await ticketModel.findOne({_id:id});
     if(ticket!== null){
     return ticket    
     }
     else{
        return('ticket not found by id');
     }
}
module.exports.getAllTicketById = async (status) => {
    const ticket = await ticketModel.find({status:status});
     if(ticket!== null){
     return ticket    
     }
     else{
        return('ticket not found by id');
     }
}
    

