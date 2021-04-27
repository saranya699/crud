import { TicketDao } from "../dao/ticketDao";
import { TicketModel } from "../model/ticketModel";

let ticketDao: TicketDao;
export class TicketService {
    constructor() {
        ticketDao = new TicketDao();
    }

    public async ticketCreate(body: TicketModel) {
       
        return await ticketDao.ticketCreate(body);
    }

    public async getTicket() {

        return await ticketDao.getTicket();
    }


    public async updateOneTicket(id: string, ticket : TicketModel){
        
        const value = await ticketDao.updateOneTicket(id,ticket)
        console.log('value',value);
        return value;
    }
}