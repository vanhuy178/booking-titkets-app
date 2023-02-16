import { BookingTicketClass } from "../models/BookingTicketsClass";
import { BaseServices } from "./baseServices";

class ManageingBookingTickets extends BaseServices {
    constructor(props) {
        super(props)
    }

    getBookingTickets = (idShowTimes) => {
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idShowTimes}`)
    }


    bookTickets = (contentShowtimesPost) => { // params is a object
        return this.post('/api/QuanLyDatVe/DatVe', contentShowtimesPost)
    }

}
export const managingBookingTickets = new ManageingBookingTickets();

