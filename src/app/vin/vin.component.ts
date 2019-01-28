import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vin',
  templateUrl: './vin.component.html',
  styleUrls: ['./vin.component.scss']
})
export class VinComponent {
  vin = new FormControl('');

  constructor() { }

  submitVin() {
    this.vin.setValue('');
  }

}
