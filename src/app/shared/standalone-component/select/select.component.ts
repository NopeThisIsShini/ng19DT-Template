import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TreeSelectModule } from 'primeng/treeselect';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, FloatLabelModule, TreeSelectModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  @Input() label: string = '';
  @Input() options!: any[];
  @Input() containerClass: string = '';
  @Input() labelClass: string = '';
  @Input() placeholder: string = '';

  onSelectionChange(event: any) {
    console.log(event);
  }
}
