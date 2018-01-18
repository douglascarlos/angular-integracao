export class Conversao {

	constructor(
		private _moedaDe?: string,
		private _moedaPara?: string,
		private _valor?: number) {}

	public get moedaDe(): string {
		return this._moedaDe;
	}

	public set moedaDe(moedaDe: string) {
		this._moedaDe = moedaDe;
	}

	public get moedaPara(): string {
		return this._moedaPara;
	}

	public set moedaPara(moedaPara: string) {
		this._moedaPara = moedaPara;
	}

	public get valor(): number {
		return this._valor;
	}

	public set valor(valor: number) {
		this._valor = valor;
	}

}