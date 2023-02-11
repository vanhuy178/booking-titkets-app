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
        console.log('get baner');
        this.get('/api/QuanLyPhim/LayDanhSachBanner')
    }

    // I am using get method to get list movies from api 
    getListMovies = () => {
        console.log('get list movies');
        this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${IDGROUP}`)
    }

}

export const managingMovieService = new ManageMovieService();