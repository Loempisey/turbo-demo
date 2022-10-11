// import { IUserLogin } from "../types/user.type";
import {model, Schema} from "mongoose"

const userLoginSchema: Schema = new Schema({
    email:{
        type: String,
        require: true,
        match: /.+@.+\..+/,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
}, {timestamps: true})

export default model<IUserLogin>("userLogin", userLoginSchema)