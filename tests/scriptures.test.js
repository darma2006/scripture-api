const request = require("supertest");
const app = require("../app");

describe("GET /notes", () => {
  it("should return all notes", async () => {
    const res = await request(app).get("/notes");
    expect(res.statusCode).toBe(200);
  });
});

const mongoose = require("mongoose");

afterAll(async () => {
  await mongoose.connection.close();
});