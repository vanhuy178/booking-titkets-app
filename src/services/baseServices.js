// WE CAN CALL HTTPS REQUEST GET, POST, PUT, DELETE
import axios from "axios";
import { DOMAIN, TOKEN } from '../utils/settings/config';

export class BaseServices {
    //put json về phía backend
    put = (url, model) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: 'PUT',
            data: model,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    post = (url, model) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: 'POST',
            data: model,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) } //JWT
        })
    }


    get = (url) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) } //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }

    delete = (url) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) } //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }
}