import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Ballot } from '../../models/Ballot';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BallotEntryComponent } from "./../ballot-entry/ballot-entry.component";

@Component({
	selector: 'app-full-ballot',
	templateUrl: './full-ballot.component.html',
	styleUrls: ['./full-ballot.component.css']
})

export class FullBallotComponent implements OnInit {
	ballot: Ballot;
	selectedBallotEntryId: number = null;
	
	constructor(@Inject(MAT_DIALOG_DATA) inputData) { 
		this.ballot = inputData.ballot;
	}

	ngOnInit() { }

	/* Function triggered from EventEmitter in ballot-entry */
	public newBallotEntrySelected(ballotEntryId: number) {
		this.selectedBallotEntryId = ballotEntryId;
	}

}
