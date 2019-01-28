import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import { DisplayService, QuoteData } from '../_services/display.service';
import { DataService } from '../_services/data.service';


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [ {provide: DisplayService, useClass: DataService} ]
})
export class AutocompleteComponent implements OnInit {
  //optionSelected: Number;
  modifiedText: any;
  public searchText : any;
  //quoteControl = new FormControl();
  data: QuoteData[];

  fwd: boolean = false;
  diesel: boolean = false;
  turbo: boolean = false;
  hybrid: boolean = false;
  disabled: boolean = false;


  constructor(private displayService: DisplayService) { }
  
  ngOnInit() {
    //this.data = this.serviceData.getData();
    //console.log(this.data[2]);
    //this.searchText = null;
    this.data = this.displayService.getQuoteData();
  }

  displayFn(user?: QuoteData): any | undefined {
    return user ? user.year + ' ' + user.make + ' ' + user.model : undefined;
  }

  onOptionSelected(val:any){
    this.optionFunc(val);
  }
  optionFunc(user?: QuoteData): any | undefined{
    this.modifiedText = user ? user.year + ' ' + user.make + ' ' + user.model : undefined;
  }


}