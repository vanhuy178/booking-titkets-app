import { IDGROUP } from "../utils/settings/config";

export class InfoMovies {
    constructor(props) {
        this.maLichChieu = '';
        this.tenCumRap = "";
        this.tenRap = "";
        this.diaChi = "";
        this.tenPhim = "";
        this.hinhAnh = "";
        this.ngayChieu = "";
        this.gioChieu = "";
    }
}

export class DetailInfoMovies {
    constructor() {
        this.dangChieu = false;
        this.sapChieu = false;
        this.hot = false;
        this.danhGia = 0;
        this.tenPhim = '';
        this.trailer = '';
        this.moTa = '';
        this.maNhom = IDGROUP;
        this.ngayKhoiChieu = '';
        this.hinhAnh = null // TARGET
    }
}