import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { validationConstants } from '../../../../config/app.constants';
import { loginResponse } from '../../model/login.model';
import { AuthService } from '../../service/auth.service';

@Component({
    selector: 'app-login',
    standalone: false,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    loginForm!: FormGroup;
    isLoading: boolean = false;

    constructor(private router: Router, private fb: FormBuilder, private authServ: AuthService, private messageServ: MessageService) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.pattern(validationConstants.EMAIL_PATTERN)]],
            password: ['', [Validators.required]],
            rememberMe: [false]
        });
    }

    onSignIn(): void {
        this.isLoading = true;
        if (this.loginForm.valid) {
            this.authServ.login().subscribe({
                next: (res: loginResponse) => {},
                error: () => {
                    this.isLoading = false;
                    this.messageServ.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials dfdfd fdfd dfdfdf dfd' });
                },
                complete: () => {
                    this.isLoading = false;
                }
            });
        }
    }
}
