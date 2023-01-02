// import { Router } from "express";
import express, { Express } from "express";
import {signup, signin} from './../controllers/todos/user.controller'

const app: Express = express()
// const router: Router = Router()
app.post("/user/signup", signup)
app.post("/user/signin", signin)

export default app