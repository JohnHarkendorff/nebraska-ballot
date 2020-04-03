import { Candidate } from './Candidate';
import { Precinct } from './Precinct';

export class BallotEntry {
	private id: number;
	private candidates: Array<Candidate>;
	private position: string;
	private precinctsAvailable: Array<Precinct>;

	constructor($precinctsAvailable: Array<Precinct>, $candidates: Array<Candidate>, $position: string, $id: number) {
		this.precinctsAvailable = $precinctsAvailable;
		this.candidates = $candidates;
		this.position = $position;
		this.id = $id;
	}

	public get $id(): number {
		return this.id;
	}

	public set $id(value: number) {
		this.id = value;
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