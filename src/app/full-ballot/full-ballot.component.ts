import { Component, Input, OnInit, Inject } from '@angular/core';
import { Ballot } from '../../models/Ballot';
import { BallotEntry } from '../../models/BalloTentry';
import { Candidate } from '../../models/Candidate';
import { Precinct } from '../../models/Precinct';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-full-ballot',
	templateUrl: './full-ballot.component.html',
	styleUrls: ['./full-ballot.component.css']
})
export class FullBallotComponent implements OnInit {
	ballot: Ballot;
	
	constructor(@Inject(MAT_DIALOG_DATA) inputData) { 
		this.ballot = inputData.ballot;
		console.log(this.ballot);
		console.log(this.ballot.$ballotEntries);
	}

	ngOnInit() {

	}
	
}
