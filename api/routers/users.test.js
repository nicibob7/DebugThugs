const api = require('../api');
const request = require('supertest');


describe('testing user endpoints', () => {
let app;

    beforeAll(async () => {
        app = api.listen(5001, () => console.log("test running on port 5001"))
        
    });

    afterAll(async () => {
        console.log("stopping test server in its tracks")
        await app.close()
    
    })

      it('should list users', async () => {
        const res = await request(app).get('/users');
        expect(res.statusCode).toEqual(200);
        
      })  

      it('should register user', async () => {

        const newUser = {
          _id: "1",
          name: "John Doe",
          email: "example@outlook.com",
          password: "password"
        }

        const res = await (await request(app).post('users/register')).setEncoding(newUser)
        expect(res.statusCode).toEqual(201)
        expect(res.body[0])
      })
})


