const supertest = require("supertest");
const server = require("./server");

describe("server.js", () => {
    describe("GET /", () => {
        it("will return status", () => {
            return supertest(server)
                .get("/")
                .then((res) => {
                    expect(res.status).toBe(200);
                });
        });
    });
    it("should return api working message", () => {
        return supertest(server)
            .get("/")
            .then((res) => {
                expect(res.body.data).toBe("Welcome to Tara's Unit 4 - Sprint 3 - Module 3 Project");
            });
    });
    describe("POST /users", () => {
        it("Should return the api status on the users endpoint", () => {
            return supertest(server)
                .get("/")
                .then((res) => {
                    expect(res.status).toBe(200);
                });
        });
    });
});