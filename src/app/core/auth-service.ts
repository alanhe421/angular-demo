import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

    getToken(): string {
        return localStorage.getItem('token');
    }

    removeToken(): void {
        localStorage.removeItem('token');
    }
}
