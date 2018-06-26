import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) {
    }


    checkCaptcha(captcha:string) {
        return this.http.get('mock-data/captcha.json');
    }

}
