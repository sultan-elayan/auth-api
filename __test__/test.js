'use strict';
const supertest = require('supertest');
const {server} = require('../src/server');
const request = supertest(server);

describe('AUTH Routes', ()=> {
    let obj={
        username:'ss',
     password:'ss'
    }
    it('sign up test  ', async () => {
        const response = await request.post('/signup').send(obj); // async
       
        expect(response.status).toEqual(201);   
    });


    it('sign in test    ', async () => {        
     const response = await request.post('/signin').send({
            username:'ss',
            password:'ss'
        }).auth(obj.body.username,'ss');
        
        expect(response.status).toEqual(200);
 
    });   
})

// =====================================================================

describe('V1 (Unauthenticated API) routes', ()=> {
    let obj={
        name:'sultan',
     calories:'test@1234',
     type:"test"

    }
    it('creat model  ', async () => {
        const response = await request.GET('/api/v1/:model').send(obj);
        expect(response.status).toEqual(201);   
    });

    it('show model  ', async () => {
        const response = await request.GET('/api/v1/:model/ID ').send(obj); 
        expect(response.status).toEqual(201);   
    });
    
    it('add model  ', async () => {
        const response = await request.POST('/api/v1/:model/ID ').send(obj); 
        expect(response.status).toEqual(201);   
    });
    
    it('update model  ', async () => {
        const response = await request.PUT('/api/v1/:model/ID ').send(obj); 
        expect(response.status).toEqual(201);   
    });
    
    it('delete model  ', async () => {
        const response = await request.DELETE('/api/v1/:model/ID ').send(obj); 
        expect(response.status).toEqual(204);   
    });

  

})


// // =====================================================================


describe('V2 (Authenticated API Routes)', ()=> {
 
    obj={
        username:"sultan",
        password:"123@test"
    }
    
    it('creat model  ', async () => {
        const response = await request.create('/api/v2/:model/').send(obj);
        expect(response.status).toEqual(201);   
    });

    it('show model  ', async () => {
        const response = await request.read('/api/v2/:model/ID ').send(obj); 
        expect(response.status).toEqual(201);   
    });
    
    it('add model  ', async () => {
        const response = await request.read('/api/v2/:model/ID ').send(obj); 
        expect(response.status).toEqual(201);   
    });
    
    it('update model  ', async () => {
        const response = await request.update('/api/v2/:model/ID ').send(obj); 
        expect(response.status).toEqual(201);   
    });
    
    it('delete model  ', async () => {
        const response = await request.delete('/api/v2/:model/ID ').send(obj); 
        expect(response.status).toEqual(204);   
    });

})
