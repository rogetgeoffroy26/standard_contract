import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { StepperComponent } from './stepper/stepper.component';
import { MakeSearchComponent } from './make-search/make-search.component';

import { CarPipe } from './autocomplete/car.pipe';
import { VinComponent } from './vin/vin.component';



import { OutputComponent } from './output/output.component';
import { DisplayOutputComponent } from './display-output/display-output.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AutocompleteComponent,
    StepperComponent,
    MakeSearchComponent,
    CarPipe,
    VinComponent,
    OutputComponent,
    DisplayOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
