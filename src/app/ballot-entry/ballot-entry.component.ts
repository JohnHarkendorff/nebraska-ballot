import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BallotEntry } from './../../models/BallotEntry';

@Component({
	selector: 'app-ballot-entry',
	templateUrl: './ballot-entry.component.html',
	styleUrls: ['./ballot-entry.component.css']
})

export class BallotEntryComponent implements OnInit {
	@Input() ballotEntry: BallotEntry;
	@Output() cardViewOpened = new EventEmitter();
	displayCardView: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

	public toggleCardView() {
		this.displayCardView = this.displayCardView ? false : true;
		if (this.displayCardView) {
			this.cardViewOpened.emit(this.ballotEntry.$id);
		}
	}

	public closeCardView(ballotEntryId: number) {
		console.log("called child's method from parent!");
		if (this.ballotEntry.$id !== ballotEntryId) {
			this.displayCardView = false;
		}
	}
}
