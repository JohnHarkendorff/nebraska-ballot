import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { BallotEntry } from './../../models/BallotEntry';

@Component({
	selector: 'app-ballot-entry',
	templateUrl: './ballot-entry.component.html',
	styleUrls: ['./ballot-entry.component.css']
})

export class BallotEntryComponent implements OnInit {
	@Input() ballotEntry: BallotEntry;
	@Input() selectedBallotEntryId: number;
	@Output() cardViewOpened = new EventEmitter();
	displayCardView: boolean = false;

	constructor() { }

	ngOnInit() { }

	/* When selectedBallotEntryId changes in the full-ballot, close all other card views */
	ngOnChanges() {
		if (this.selectedBallotEntryId != this.ballotEntry.$id) {
			this.displayCardView = false;
		}
	}

	public toggleCardView() {
		this.displayCardView = this.displayCardView ? false : true;
		if (this.displayCardView) {
			this.cardViewOpened.emit(this.ballotEntry.$id);
		}
	}
}
