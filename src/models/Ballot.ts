import { BallotEntry } from './BallotEntry';
import { Precinct } from './Precinct';

export class Ballot {
	private precinct: Precinct;
	private ballotEntries: Array<BallotEntry>;

	constructor($precinct: Precinct, $ballotEntries: Array<BallotEntry>) {
		this.precinct = $precinct;
		this.ballotEntries = $ballotEntries;
	}
	
	public get $precinct(): Precinct {
		return this.precinct;
	}

	public set $precinct(value: Precinct) {
		this.precinct = value;
	}
	
	public get $ballotEntries(): Array<BallotEntry> {
		return this.ballotEntries;
	}

	public set $ballotEntries(value: Array<BallotEntry>) {
		this.ballotEntries = value;
	}
}