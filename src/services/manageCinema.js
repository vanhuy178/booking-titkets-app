import { IDGROUP } from "../utils/settings/config";
import { BaseServices } from "./baseServices";

class ManageCinema extends BaseServices {
    constructor(props) {
        super(props)
    }

    getListBannerCinema = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${IDGROUP}`)
    }

    getInFoCinemaSystem = () => {
        return this.get('/api/QuanLyRap/LayThongTinHeThongRap')
    }
    getInfoGroupCinemaSystem = (cinemaName) => {
        return this.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${cinemaName}`)
    }

    postShowtime = (value) => {
        return this.post('/api/QuanLyDatVe/TaoLichChieu', value)
    }
}

export const managingCenima = new ManageCinema();