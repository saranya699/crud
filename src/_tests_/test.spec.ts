import app from '../server';
import request from 'supertest';

describe('Test ticketController',() => {
    it('tests the POST method and return for status/ticket', async() => {
    const result: any = await request(app)
        .post('/ticket')
        .send({"movieName": "puli",
    "movieStartTime":7123834587276,
    "movieEndTime":2364576325476,
    "status":"active"
      });
       
    expect(result.status).toBe(200);
    });
});
describe('Test ticketController',() => {
    it('tests the GET method and return for status/ticket', async() => {
        const result: any = await request(app)
        .get('/ticket')
        expect(result.status).toBe(200); 
 });
});
describe('Test ticketController',() => {
    it('tests the GET method by id and return for status/ticket', async() => {
        const result: any = await request(app)
        .get('/ticket')
        expect(result.status).toBe(200); 
 });
});

describe('Test userController',() => {
    it('tests the POST method and return for status/user', async() => {
       const result: any = await request(app)
        .post('/user')
        .send({"firstName":"sara"})
        
        expect(result.status).toBe(200);
    });
});