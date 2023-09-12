const req = require("supertest")
const api = require("../api")
const Entry = require("../models/Entry")

describe("Timetable Testing: ", () => {
    let app;

    beforeAll(() => {
        app = api.listen(3001, () => {
        })
    })

    test("GET /timetable returns status 200: ", () => {
        req(app)
            .get("/timetable")
            .expect(200)
    })

    test("You can post an entry to the timetable: ", () => {
        const data = {
            "content": "This is a test entry"
        }
        req(app)
            .post("/timetable")
            .send(data)
            .set("Accept", "Application/json")
            .expect(201)
    })

    test("You can delete an entry from the timetable", () => {
        req(app).delete(`/timetable/${id}`).expect(204)
    })
})
