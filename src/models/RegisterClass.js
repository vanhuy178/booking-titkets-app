import { UserLoginClass } from "./LoginClass";

export class Register extends UserLoginClass {
    constructor(props) {
        super(props);
        this.email = "";
        this.soDt = "";
        this.maNhom = "";
        this.hoTen = "";
    }
}