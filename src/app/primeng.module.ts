import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { FloatLabel } from 'primeng/floatlabel';
import { StyleClassModule } from 'primeng/styleclass';
const primengModules = [ButtonModule, Dialog, CheckboxModule, InputTextModule, PasswordModule, RippleModule, FloatLabel, StyleClassModule];

@NgModule({
    declarations: [],
    imports: [CommonModule, ...primengModules],
    exports: [...primengModules]
})
export class PrimengModule {}
