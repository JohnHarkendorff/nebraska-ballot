import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Precinct } from '../../models/Precinct';

@Component({
  selector: 'app-precinct-selector',
  templateUrl: './precinct-selector.component.html',
  styleUrls: ['./precinct-selector.component.css']
})

export class PrecinctSelectorComponent implements OnInit{
	@Output() onPrecinctSelected: EventEmitter<any> = new EventEmitter<any>();

    precincts = Array<Precinct>();
	selectedPrecinct: Precinct;

	constructor() {
		this.precincts.push(new Precinct("0D3"));
		this.precincts.push(new Precinct("0D4"));
	}

	ngOnInit() { }

	newPrecinctSelected() {
		this.onPrecinctSelected.emit(this.selectedPrecinct);
	}
}
