import express, { Express } from "express";
import { createMeeting } from "../controllers/todos/meeting.controller";

const app: Express = express()
app.post("/api/v1/booking", createMeeting)

export default app



