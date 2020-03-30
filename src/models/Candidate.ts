export class Candidate {

	private politicalParty: string;
	private firstName: string;
	private lastName: string;
	private encumbant: boolean;
	private answers: Array<string>;
	
	constructor($politicalParty: string, $firstName: string, $lastName: string, $encumbant: boolean, $answers: Array<string>) {
		this.politicalParty = $politicalParty;
		this.firstName = $firstName;
		this.lastName = $lastName;
		this.encumbant = $encumbant;
		this.answers = $answers;
	}

	public get $politicalParty(): string {
		return this.politicalParty;
	}

	public get $firstName(): string {
		return this.firstName;
	}

	public get $lastName(): string {
		return this.lastName;
	}

	public get $encumbant(): boolean {
		return this.encumbant;
	}
	
	public get $answers(): Array<string> {
		return this.answers;
	}
}