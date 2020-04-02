import { Component } from '@angular/core';
import { Precinct } from '../models/Precinct';
import { PrecinctSelectorComponent } from './precinct-selector/precinct-selector.component';
import { FullBallotComponent } from './full-ballot/full-ballot.component';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'nebraska-ballot';

	selectedPrecinct: Precinct;
	ballotVisible: boolean = false;

	constructor(private dialog: MatDialog) {}

	public getSelectedPrecinct(precinct: any) {
		this.selectedPrecinct = precinct;
	}

	public generateBallot() {
		this.ballotVisible = true;

		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.autoFocus = true;

		dialogConfig.data = {
			name: this.selectedPrecinct.$name
		};

		this.dialog.open(FullBallotComponent, dialogConfig);
		// let dialogRef = dialog.open(FullBallotComponent, {
		// 	height: "400px",
		// 	width: "600px"
		// });
	}
}
