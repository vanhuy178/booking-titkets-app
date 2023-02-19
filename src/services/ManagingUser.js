import { BaseServices } from "./baseServices";

class ManagingUser extends BaseServices {
    constructor(props) {
        super(props)
    }

    postInfoLogin = (infoLogin) => {//{taiKhoan, matKhau}
        return this.post('/api/QuanLyNguoiDung/DangNhap', infoLogin)
    }

    takeInfouser = () => {
        return this.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan')
    }
    postInfoRegister = (infoRegister) => {
        return this.post('/api/QuanLyNguoiDung/DangKy', infoRegister)
    }
}
export const managingUser = new ManagingUser()

