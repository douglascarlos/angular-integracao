export class ConversaoResponse {

	constructor(
		private _base: string,
		private _date: string,
		private _rates: any) {}

	public get base(): string {
		return this._base;
	}

	public get date(): string {
		return this._date;
	}

	public get rates(): any {
		return this._rates;
	}

}