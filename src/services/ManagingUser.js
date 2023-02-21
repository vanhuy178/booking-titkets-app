import { IDGROUP } from "../utils/settings/config";
import { BaseServices } from "./baseServices";

class ManagingUser extends BaseServices {
    constructor(props) {
        super(props)
    }
    fetchDataUser = (name = '') => {
        return name === '' ? this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${IDGROUP}`) : this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${IDGROUP}&tuKhoa=${name}`)
    }

    postUserInfo = (userInfo) => {
        return this.post('/api/QuanLyNguoiDung/ThemNguoiDung', userInfo)
    }

    postInfoLogin = (infoLogin) => {//{taiKhoan, matKhau
        return this.post('/api/QuanLyNguoiDung/DangNhap', infoLogin)
    }

    takeInfouser = () => {
        return this.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan')
    }
    postInfoRegister = (infoRegister) => {
        return this.post('/api/QuanLyNguoiDung/DangKy', infoRegister)
    }

    deleteUser = (userName) => {
        return this.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${userName}`)
    }
}
export const managingUser = new ManagingUser()

