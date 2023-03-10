import { IDGROUP } from "../utils/settings/config";
import { BaseServices } from "./baseServices";

export class ManageMovieService extends BaseServices {

    // inhrit all method of baseService
    constructor(props) {
        super(props)
    }
    // I am using get method of baseService
    // I TAKE BANNER IN THIS FOLDER

    // I am using get method to get list banner from api 
    getListBanner = () => {
        return this.get('/api/QuanLyPhim/LayDanhSachBanner')
    }

    // I am using get method to get list movies from api 
    getListMovies = (moviesName) => {
        let check = moviesName !== '' ? `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${IDGROUP}&tenPhim=${moviesName}` : `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${IDGROUP}`
        return this.get(check)
    }
    // GET DATA FOR SHOWTIMES INFO
    getListMoviesShowTimesInfo = (idMovies) => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idMovies}`)
    }

    // POST DATA TO UPLOAD MOVIES
    uploadTheMovie = (formData) => {
        return this.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, formData);
    }

    // GET DATA TO EDIT FILM
    getInfoMoviesToEditMovies = (idMovies) => {
        return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idMovies}`)
    }

    updatedInfoMovies = (infoUpdatedMovies) => {
        return this.post('/api/QuanLyPhim/CapNhatPhimUpload', infoUpdatedMovies)
    }

    deleteMovies = (idMovie) => {
        return this.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${idMovie}`)
    }
}

export const managingMovieService = new ManageMovieService();