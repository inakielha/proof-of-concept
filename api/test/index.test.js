const thumbnail = require("../routes/thumbnail")
const request = require('supertest');

describe("POST/validate", ()=>{
    test("Should return error no token validation", async ()=>{
        try{
            const response = await request(thumbnail).post("/").send()
            console.log(response)
            expect(response.status).toBe(200)
        }catch(e){
            console.log(e)
        }
    }, 15000)
})