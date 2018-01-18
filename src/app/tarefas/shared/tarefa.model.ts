export class Tarefa {

	constructor(
		private id?: number,
		private nome?: string,
		private concluida?: boolean) {}

	public getId(): number {
		return this.id;
	}

	public setId(id: number): void {
		this.id = id;
	}	

	public getNome(): string {
		return this.nome;
	}

	public setNome(nome: string): void {
		this.nome = nome;
	}

	public estaConcluida(): boolean {
		return this.concluida;
	}

	public setConcluida(concluida: boolean): void {
		this.concluida = concluida;
	}
}