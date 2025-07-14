import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { PrimengModule } from '../../primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';
import { SignupComponent } from './component/signup/signup.component';
import { InputTextComponent } from '../../shared/standalone-component/input-text/input-text.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
    declarations: [AuthComponent, LoginComponent, SignupComponent],
    imports: [CommonModule, AuthRoutingModule, PrimengModule, FormsModule, AppFloatingConfigurator, InputTextComponent, ReactiveFormsModule]
})
export class AuthModule {}
