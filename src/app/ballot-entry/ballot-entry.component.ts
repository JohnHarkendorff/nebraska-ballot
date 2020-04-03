import { Component, Input, OnInit } from '@angular/core';
import { BallotEntry } from './../../models/BallotEntry';

@Component({
	selector: 'app-ballot-entry',
	templateUrl: './ballot-entry.component.html',
	styleUrls: ['./ballot-entry.component.css']
})

export class BallotEntryComponent implements OnInit {
	@Input() ballotEntry: BallotEntry;
	displayCardView: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

	public toggleCardView() {
		this.displayCardView = this.displayCardView ? false : true;
	}
}
