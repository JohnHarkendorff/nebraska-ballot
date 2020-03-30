import { Component, Input, OnInit, Inject } from '@angular/core';
import { Ballot } from '../../models/Ballot';
import { BallotEntry } from '../../models/BalloTentry';
import { Candidate } from '../../models/Candidate';
import { Precinct } from '../../models/Precinct';
import * as ballotEntriesJson from './../../assets/testballot.json';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-full-ballot',
	templateUrl: './full-ballot.component.html',
	styleUrls: ['./full-ballot.component.css']
})
export class FullBallotComponent implements OnInit {
	ballot: Ballot;
	form: FormGroup;
	precinct: Precinct;
	description: string;
	
	constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<FullBallotComponent>, @Inject(MAT_DIALOG_DATA) precinct) { 
		this.precinct = precinct;
		this.description = precinct.description;
	}

	ngOnInit() {
		this.form = this.fb.group({
            description: [this.description, []]
        });
		this.ballot = this.generateBallot(this.precinct);
	}
	
	private generateBallot(precinct: any): Ballot {
		let ballotEntries: Array<BallotEntry> = ballotEntriesJson.default;
		let thisBallotEntries: Array<BallotEntry> = new Array<BallotEntry>();

		ballotEntries.forEach(ballotEntry => {
			if (ballotEntry.$precinctsAvailable.includes(precinct.$name)) {
				thisBallotEntries.push(ballotEntry);
			}
		});

		thisBallotEntries.sort((b1, b2) => {
			if (b1.$precinctsAvailable.length > b2.$precinctsAvailable.length) {
				return -1;
			} else if (b2.$precinctsAvailable.length > b1.$precinctsAvailable.length) {
				return 1;
			} else {
				return 0;
			}
		});

		let ballot: Ballot = new Ballot(precinct, thisBallotEntries);
		console.log(ballot);
		return ballot;
	}
}
