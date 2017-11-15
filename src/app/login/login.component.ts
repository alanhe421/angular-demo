import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    myForm: FormGroup;

    constructor(private loginService: LoginService, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.myForm = this.fb.group({
            username: ['', [Validators.required]],
            password: [
                '',
                [Validators.required]
            ],
            captcha: ['', [this.checkCaptcha.bind(this)]]
        });

    }

    /**
     * 验证校验码
     */
    checkCaptcha(control: AbstractControl) {
        return this.loginService.checkCaptcha(control.value).subscribe(res => {
            return res['status'] ? null : {wrong: true};
        });
    }

    doSubmit() {

    }

}
