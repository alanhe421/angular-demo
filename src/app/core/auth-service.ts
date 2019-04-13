import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {


    constructor(private http: HttpClient) {
    }

    getToken(): string {
        return localStorage.getItem('token');
    }

    removeToken(): void {
        localStorage.removeItem('token');
    }

    logic() {
        return this.http.get('mock-data/user.json').map((res: any) => {
            localStorage.setItem('token', res.token);
            return res;
        });
    }
}
