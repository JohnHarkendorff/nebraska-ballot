import { Component } from '@angular/core';
import { Precinct } from '../models/Precinct';
import { Ballot } from '../models/Ballot';
import { BallotEntry } from '../models/BallotEntry';
import { PrecinctSelectorComponent } from './precinct-selector/precinct-selector.component';
import { FullBallotComponent } from './full-ballot/full-ballot.component';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import * as ballotEntriesJson from './../assets/testballot.json';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'nebraska-ballot';

	ballot: Ballot;
	selectedPrecinct: Precinct;
	ballotVisible: boolean = false;

	constructor(private dialog: MatDialog) {}

	public getSelectedPrecinct(precinct: any) {
		this.selectedPrecinct = precinct;
	}

	public generateBallot() {
		let ballotEntries: Array<BallotEntry> = ballotEntriesJson.default;
		let thisBallotEntries: Array<BallotEntry> = new Array<BallotEntry>();

		/* Get all ballot entries that are in this precinct */
		ballotEntries.forEach(ballotEntry => {
			if (ballotEntry.precinctsAvailable.includes(this.selectedPrecinct.$name)) {
				thisBallotEntries.push(ballotEntry);
			}
		});

		/* Order by which has the most ballot entires (i.e. positions like "Governor" should come first) */
		thisBallotEntries.sort((b1, b2) => {
			if (b1.precinctsAvailable.length > b2.precinctsAvailable.length) {
				return -1;
			} else if (b2.precinctsAvailable.length > b1.precinctsAvailable.length) {
				return 1;
			} else {
				return 0;
			}
		});

		/* Set the IDs for each ballot entry so ballot-entry components can communicate */
		for (let i = 0; i < thisBallotEntries.length; i++) {
			thisBallotEntries[i].$id = i;
		}
		
		this.ballot = new Ballot(this.selectedPrecinct, thisBallotEntries);

		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.autoFocus = true;

		dialogConfig.data = {
			ballot: this.ballot
		};

		this.dialog.open(FullBallotComponent, dialogConfig);
		// let dialogRef = dialog.open(FullBallotComponent, {
		// 	height: "400px",
		// 	width: "600px"
		// });
	}
}
