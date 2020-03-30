import { Candidate } from './Candidate';
import { Precinct } from './Precinct';

export class BallotEntry {
	private precinctsAvailable: Array<Precinct>;
	private candidates: Array<Candidate>;
	private position: string;

	constructor($precinctsAvailable: Array<Precinct>, $candidates: Array<Candidate>, $position: string) {
		this.precinctsAvailable = $precinctsAvailable;
		this.candidates = $candidates;
		this.position = $position;
	}

	public get $precinctsAvailable(): Array<Precinct> {
		return this.precinctsAvailable;
	}

	public set $precinctsAvailable(value: Array<Precinct>) {
		this.precinctsAvailable = value;
	}
	
	public get $candidates(): Array<Candidate> {
		return this.candidates;
	}

	public set $candidates(value: Array<Candidate>) {
		this.candidates = value;
	}
	
	public get $position(): string {
		return this.position;
	}

	public set $position(value: string) {
		this.position = value;
	}
}