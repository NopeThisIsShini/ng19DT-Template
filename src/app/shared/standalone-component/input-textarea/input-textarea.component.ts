import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-input-textarea',
  standalone: true,
  imports: [TextareaModule, FloatLabelModule],
  templateUrl: './input-textarea.component.html',
  styleUrl: './input-textarea.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextareaComponent),
      multi: true, // Allows multiple form controls
    },
  ],
})
export class InputTextareaComponent implements ControlValueAccessor {
  @Input() id: string = '';
  @Input() rows: string = '10';
  @Input() cols: string = '30';
  @Input() label: string = '';
  @Input() customClass: string = '';
  @Input() mark: boolean = false;

  get isRequired(): boolean {
    return this.mark;
  }

  value: any = ''; // Bound to the form control's value
  private onChange: (_: any) => void = () => {};

  // Called when the input value changes
  onInputChange(event: any): void {
    this.value = event.target.value; // Update the internal value
    this.onChange(event.target.value); // Notify Angular form about the value change
  }

  // Required methods for ControlValueAccessor
  writeValue(value: any): void {
    this.value = value; // Update the internal value
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn; // Assign the function to notify Angular forms of value changes
  }
  registerOnTouched(fn: () => void): void {}
}
