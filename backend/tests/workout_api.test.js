const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const Workout = require("../models/workoutModel");
const User = require("../models/userModel");

const api = supertest(app);

const initialWorkouts = [
    {
        workoutTitle: "Morning HIIT",
        description: "High intensity interval training session",
        location: { city: "Helsinki", state: "Uusimaa" },
        sessionPrice: 25,
        fitnessLevel: "Intermediate",
        requiredEquipment: "None",
    },
    {
        workoutTitle: "Strength Basics",
        description: "Fundamental strength training",
        location: { city: "Tampere", state: "Pirkanmaa" },
        sessionPrice: 30,
        fitnessLevel: "Beginner",
        requiredEquipment: "Dumbbells",
    },
];

beforeEach(async () => {
    await Workout.deleteMany({});
    await User.deleteMany({});
    await Workout.insertMany(initialWorkouts);
});

describe("Workout API", () => {

    test("GET /api/workouts returns all workouts", async () => {
        const response = await api.get("/api/workouts");
        expect(response.statusCode).toBe(200);
        expect(response.headers["content-type"]).toMatch(/application\/json/);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body).toHaveLength(initialWorkouts.length);
    });

    test("POST /api/users/signup creates a new user", async () => {
        const newUser = {
            name: "Alice Smith",
            username: "alice123",
            password: "Password1",
            phone_number: "1234567890",
            address: "123 Main St"
        };

        const response = await api
            .post("/api/users/signup")
            .send(newUser);

        expect(response.statusCode).toBe(201);
        expect(response.body.username).toBe(newUser.username);
        expect(typeof response.body.token).toBe("string");
        
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});