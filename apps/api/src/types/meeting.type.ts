import { Document } from "mongoose";

export interface BookingMeeting extends Document {
    topic: string;
    date: Date;
    room: object;
    time_from: string;
    time_to: string;
};
