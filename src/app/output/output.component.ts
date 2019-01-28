import { Component, OnInit, Input } from '@angular/core';
import { User } from '../_models/autocomplete-model';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  @Input() option: User;
  constructor() { }

  ngOnInit() {
  }

}
