import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { DisplayService, QuoteData, CustomizeData } from '../_services/display.service';
import { DataService } from '../_services/data.service';

export type QuoteEditor = 'quoteControl' | 'vinControl';
export type CustomizeEditor = 'customizeControl' | 'partsControl';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [ {provide: DisplayService, useClass: DataService} ]
})
export class StepperComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  modifiedTextQuote: any;

  milesText: any;
  deductibleText: any;
  termText: any;
  coverageText: any;



  public searchText : any;
  public milesDriven : any;
  public deductibleAmount: any;
  public leaseTerm: any;
  public coverageLevel: any;

  quoteControl = new FormControl();
  vinControl = new FormControl('');

  customizeControl = new FormControl();
  partsControl = new FormControl('');

  qdata: QuoteData[];
  cdata: CustomizeData[];

  mileage: number;
  zipcode: number;

  fwd: boolean = false;
  diesel: boolean = false;
  turbo: boolean = false;
  hybrid: boolean = false;
  disabled: boolean = false;

  editorQuote: QuoteEditor = 'quoteControl';
  editorCustomize: CustomizeEditor = 'customizeControl';

  panelOpenState = false;

  constructor(private _formBuilder: FormBuilder, private displayService: DisplayService) {}

  ngOnInit() {
    this.qdata = this.displayService.getQuoteData();
    this.cdata = this.displayService.getCustomizeData();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }


  displayFn(user?: QuoteData): any | undefined {
    return user ? user.year + ' ' + user.make + ' ' + user.model : undefined;
  }
  onOptionSelected(val:any){
    this.optionFunc(val);
  }
  optionFunc(user?: QuoteData): any | undefined{
    this.modifiedTextQuote = user ? user.year + ' ' + user.make + ' ' + user.model : undefined;
  }

  //Miles Display Function
  onSelectedMiles(val:any){
    this.customMiles(val);
  }
  customMiles(feat: CustomizeData): any{
    this.milesText = feat.miles;
  }

  //Deductible Display Function
  onSelectedDeductible(val:any){
    this.customDeductible(val);
  }
  customDeductible(feat: CustomizeData): any{
    this.deductibleText = feat.deductible;
  }

  //Term Display Function
  onSelectedTerm(val:any){
    this.customTerm(val);
  }
  customTerm(feat: CustomizeData): any{
    this.termText = feat.term;
  }

  //Coverage Display Function
  onSelectedCoverage(val:any){
    this.customCoverage(val);
  }
  customCoverage(feat: CustomizeData): any{
    this.coverageText = feat.coverage;
  }

/** Quote Control Editor **/
  get showQuoteEditor() {
    return this.editorQuote === 'quoteControl';
  }

  get showVinEditor() {
    return this.editorQuote === 'vinControl';
  }

  submitVin() {
    this.vinControl.setValue('');
  }

  toggleQuoteEditor(type: QuoteEditor) {
    this.editorQuote = type;
  }

/** Customize Control Editor **/
get showCustomizeEditor() {
  return this.editorCustomize === 'customizeControl';
}

get showPartsEditor() {
  return this.editorCustomize === 'partsControl';
}

submitParts() {
  this.partsControl.setValue('');
}

toggleCustomizeEditor(type: CustomizeEditor) {
  this.editorCustomize = type;
}

  reset(){
    this.milesDriven = null;
    this.deductibleAmount = null;
    this.leaseTerm = null;
    this.coverageLevel = null;
  }


}


