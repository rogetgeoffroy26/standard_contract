import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../_services/display.service';

@Component({
  selector: 'app-display-output',
  templateUrl: './display-output.component.html',
  styleUrls: ['./display-output.component.scss']
})
export class DisplayOutputComponent implements OnInit {

  constructor(public displayService: DisplayService) {}

  ngOnInit() {
  }

}
