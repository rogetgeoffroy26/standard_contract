import { Component } from '@angular/core';
//import { User } from './stepper/stepper.model';

export type EditorType = 'quoteControl' | 'vin';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-ng';
  //user: User;
  
  constructor(){
    /*this.user = new User();
    this.user.name = "User Name";
    this.user.designation = "User Title";
    this.user.address = "User Address";
    this.user.phone = [
      '555-876-4352',
      '555-877-1234'
    ];*/
  }

  editor: EditorType = 'quoteControl';
  
  get showQuoteEditor() {
    return this.editor === 'quoteControl';
  }

  get showVinEditor() {
    return this.editor === 'vin';
  }


  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
