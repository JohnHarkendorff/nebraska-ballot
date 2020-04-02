import { Component, Input, OnInit } from '@angular/core';
import { BallotEntry } from './../../models/BallotEntry';

@Component({
	selector: 'app-ballot-entry',
	templateUrl: './ballot-entry.component.html',
	styleUrls: ['./ballot-entry.component.css']
})

export class BallotEntryComponent implements OnInit {
	@Input() ballotEntry: BallotEntry;

	constructor() { }

	ngOnInit(): void {
	}

}
