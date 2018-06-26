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
    errorMsg: string;

    constructor(private loginService: LoginService, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.myForm = this.fb.group({
            username: ['', [Validators.required]],
            password: [
                '',
                [Validators.required]
            ]
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

    /**
     * 输入表单校验
     */
    inputBlur(event) {
        if (!this.myForm.invalid) {
            return;
        }
        const name = event.target.name;
        if (name === 'username' && this.myForm.get(name).hasError('required')) {
            return this.errorMsg = '用户名必填';
        }
        if (name === 'password' && this.myForm.get(name).hasError('required')) {
            return this.errorMsg = '密码必填';
        }
    }

}
