export class Moeda {

	constructor(
		private _sigla?: string,
		private _descricao?: string) {}

	public get sigla(): string {
		return this._sigla;
	}

	public set sigla(value: string) {
		this._sigla = value;
	}

	public get descricao(): string {
		return this._descricao;
	}

	public set descricao(value: string) {
		this._descricao = value;
	}

	public getDescricaoParaSelect(): string {
		return this._sigla + ' - ' + this._descricao;
	}

}