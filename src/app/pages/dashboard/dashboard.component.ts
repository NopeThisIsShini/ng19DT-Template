import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private messageService: MessageService) { }

  show() {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Message Content',
      life: 3000,
    });
  }
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
