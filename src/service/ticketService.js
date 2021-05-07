const ticketDao = require('../dao/ticketDao');

module.exports.create = async (ticketData) => {
    console.log("dao----->");
    return await ticketDao.create(ticketData);
    
}
module.exports.getTicket = async () => {
    console.log("tickets---->");
    return await ticketDao.getTicket();
    
}
module.exports.updateOneTicket = async (id,body) => {
    console.log("updateTicket---->");
    return await ticketDao.updateOneTicket(id,body);
}
module.exports.getTicketById = async (id) => {
    console.log("getTicketById---->");
    return await ticketDao.getTicketById(id);
}
module.exports.getAllTicketById = async (status) => {
    console.log("getAllTicketById---->");
    return await ticketDao.getAllTicketById(status);
}