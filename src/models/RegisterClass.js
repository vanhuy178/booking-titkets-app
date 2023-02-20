import { UserLoginClass } from "./LoginClass";

export class RegisterClass extends UserLoginClass {
    constructor(props) {
        super(props);
        this.email = "";
        this.soDt = "";
        this.maNhom = "";
        this.hoTen = "";
    }
}