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
	@ViewChild(BallotEntryComponent) private ballotEntryComponent: BallotEntryComponent;
	ballot: Ballot;
	
	constructor(@Inject(MAT_DIALOG_DATA) inputData) { 
		this.ballot = inputData.ballot;
	}

	public closeAllOtherCardViews(ballotEntryId: number) {
		this.ballotEntryComponent.closeCardView(ballotEntryId);
	}

	ngOnInit() { }

}
