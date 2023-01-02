import { Response, Request } from "express";
import { BookingMeeting } from "../../types/meeting.type";
import Booking from './../../models/meeting.model'

const createMeeting = async (req: Request, res: Response): Promise<void> => {
    const {topic, date, room, time_from, time_to } = req.body
    try {
        const booking: BookingMeeting = new Booking({
            topic: topic,
            date: date,
            room: room,
            time_from: time_from,
            time_to: time_to
        })
        const newBooking: BookingMeeting = await booking.save()
        res.status(201).send({
            booking: newBooking,
            statusCode: 201,
            message: "Booking meeting is created"
        })
    } catch (error) {
        throw error
    }
}

export {
    createMeeting
}