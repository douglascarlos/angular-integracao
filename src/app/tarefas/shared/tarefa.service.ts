import { Injectable } from '@angular/core';

import { Tarefa } from './';

@Injectable()
export class TarefaService {

  constructor() { }

  public buscar(): Tarefa[] {
  	return this.buscarDados();
  }

  public cadastrar(tarefa: Tarefa): void {
    tarefa.setId((new Date()).getTime());
    tarefa.setConcluida(false);
    let tarefas: Tarefa[] = this.buscar();
    tarefas.push(tarefa);
    this.atualizarDados(tarefas);
  }

  public buscarPorId(id: number): Tarefa {
    let tarefas: Tarefa[] = this.buscar();
    return tarefas.find(tarefa => tarefa.getId() === id);
  }

  public editar(tarefaAtulizada: Tarefa): void {
    let tarefas: Tarefa[] = this.buscar();
    tarefas.forEach((tarefa, index, array) => {
      if(tarefa.getId() == tarefaAtulizada.getId()){
        array[index] = tarefaAtulizada;
      }
    });
    this.atualizarDados(tarefas);
  }

  public remover(tarefaRemovida: Tarefa): void {
    let tarefas = this.buscar();
    tarefas = tarefas.filter(tarefa => tarefa.getId() != tarefaRemovida.getId());
    this.atualizarDados(tarefas);
  }

  public alterarStatus(tarefa: Tarefa): void {
    tarefa.setConcluida(!tarefa.estaConcluida());
    this.editar(tarefa);
  }

  private buscarDados(): Tarefa[] {
  	let dados: string = localStorage.getItem('tarefas');
  	let tarefas: Tarefa[] = [];
  	if(dados){
  		tarefas = JSON.parse(dados);
  		tarefas.forEach((tarefa, index, array) => {
        array[index] = new Tarefa(tarefa.id, tarefa.nome, tarefa.concluida);
  		});
  	}
  	return tarefas;
  }

  private atualizarDados(tarefas: Tarefa[]): void {
  	let dados: string = JSON.stringify(tarefas);
  	localStorage.setItem('tarefas', dados);
  }

}
