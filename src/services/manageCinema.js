import { IDGROUP } from "../utils/settings/config";
import { BaseServices } from "./baseServices";

class ManageCinema extends BaseServices {
    constructor(props) {
        super(props)
    }

    getListBannerCinema = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${IDGROUP}`)
    }


}

export const managingCenima = new ManageCinema();