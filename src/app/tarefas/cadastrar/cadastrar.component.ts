import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

	@ViewChild('formTarefa') formTarefa: NgForm;
	public tarefa: Tarefa;

  constructor(
  	private tarefaService: TarefaService, 
  	private router: Router
  ) { }

  ngOnInit() {
  	this.tarefa =  new Tarefa();
  }

  public cadastrar(): void {
  	if(this.validarFormulario()){
  		this.tarefaService.cadastrar(this.tarefa);
  		this.router.navigate(['tarefas']);
  	}
  }

  private validarFormulario(): boolean {
  	return this.formTarefa.form.valid;
  }

}
