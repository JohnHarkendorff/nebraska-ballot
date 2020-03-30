import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PrecinctSelectorComponent } from './precinct-selector/precinct-selector.component';
import { FullBallotComponent } from './full-ballot/full-ballot.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
	AppComponent,
	PrecinctSelectorComponent,
	FullBallotComponent
  ],
  imports: [
	BrowserModule,
	FormsModule,
	ReactiveFormsModule,
	MatDialogModule,
	BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FullBallotComponent]
})
export class AppModule { }
