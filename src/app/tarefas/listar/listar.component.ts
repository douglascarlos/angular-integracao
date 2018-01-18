import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

	public tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
  	this.tarefas = this.tarefaService.buscar();
  }

  public temTarefas(): boolean {
  	return this.tarefas.length > 0;
  }

  public remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if(confirm('Você deseja remover a tarefa ' + tarefa.getNome() + '?')){
      this.tarefaService.remover(tarefa);
      this.tarefas = this.tarefaService.buscar();
    }
  }

  public alterarStatus(tarefa: Tarefa): void {
    if(confirm('Você alterar o status da tarefa ' + tarefa.getNome() + '?')){
      this.tarefaService.alterarStatus(tarefa);
      this.tarefas = this.tarefaService.buscar();
    }
  }

}
