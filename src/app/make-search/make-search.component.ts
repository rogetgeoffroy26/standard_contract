import { Component } from '@angular/core';

@Component({
  selector: 'app-make-search',
  templateUrl: './make-search.component.html',
  styleUrls: ['./make-search.component.scss'],
})
export class MakeSearchComponent {
  isCollapsed: boolean = true;
  quotes = {}
  constructor() {
  
  }
  ngOnInit() {
  }

  toggleCollapsed(){
    this.isCollapsed = !this.isCollapsed;
  }

}
