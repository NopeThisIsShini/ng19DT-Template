import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PrimengModule } from '../../primeng.module';
import { ButtonModule } from 'primeng/button';
import { InputTextComponent } from '../../shared/standalone-component/input-text/input-text.component';
import { InputTextareaComponent } from '../../shared/standalone-component/input-textarea/input-textarea.component';


@NgModule({
  declarations: [
    DashboardComponent,
    
  ],
  imports: [
    CommonModule,
    PrimengModule,
    InputTextComponent,
    InputTextareaComponent,
  
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
