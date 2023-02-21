import { UserLoginClass } from "./LoginClass"

export class ManagingUserClass extends UserLoginClass {
    constructor(props) {
        super(props)
        this.hoTen = ""
        this.email = ""
        this.soDT = ""
        this.maNhom = ""
        this.loaiNguoiDung = ""
        this.thongTinDatVe = new Array(new InfoBookingClass())
    }
}

class InfoBookingClass {
    constructor() {
        this.maVe = null;
        this.ngayDat = "";
        this.tenPhim = "";
        this.hinhAnh = "";
        this.giaVe = null;
        this.thoiLuongPhim = null;
        this.danhSachGhe = new Array(new ListDetailChairForUser())
    }
}
class ListDetailChairForUser {
    constructor() {
        this.maHeThongRap = "";
        this.tenHeThongRap = "";
        this.maCumRap = "";
        this.tenCumRap = "";
        this.maRap = null;
        this.tenRap = "";
        this.maGhe = null;
        this.tenGhe = ""
    }
}
