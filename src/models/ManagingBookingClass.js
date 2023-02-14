import { InfoMovies } from "./InfoMoviesClass";
import { ListChair } from "./ListChairClass";

export class ManagingBookingTicketsClass {
    constructor(props) {
        this.thongTinPhim = new InfoMovies();
        this.danhSachGhe = new Array(new ListChair())
    }
}

