import { BaseServices } from "./baseServices";

class ManageingBookingTickets extends BaseServices {
    constructor(props) {
        super(props)
    }

    getBookingTickets = (idShowTimes) => {
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idShowTimes}`)
    }
}
export const managingBookingTickets = new ManageingBookingTickets();

