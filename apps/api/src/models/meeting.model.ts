import { BookingMeeting } from "../types/meeting.type";
import {model, Schema} from "mongoose"

const bookingSchema: Schema = new Schema({
    topic:{
        type: String,
        require: true,
    },
    date:{
        type: Date,
        require: true,
    },
    room:{
        type: Object,
        require: true
    },
    time_from: {
        type: String,
        require: true
    },
    time_to: {
        type: String,
        require: true
    }

}, {timestamps: true})

export default model<BookingMeeting>("Booking", bookingSchema)