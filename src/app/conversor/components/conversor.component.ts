import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Moeda, Conversao, ConversaoResponse } from '../models';
import { MoedaService, ConversorService } from '../services';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

	private moedas: Moeda[];
	private conversao: Conversao;
	private possuiErro: boolean;
	private conversaoResponse: ConversaoResponse;

	@ViewChild('conversorForm') conversorForm: NgForm;

  constructor(
  	private moedaService: MoedaService,
  	private conversorService: ConversorService) { }

  ngOnInit() {
  	this.moedas = this.moedaService.listarTodas();
  	this.init();
  }

  private init(): void {
  	this.conversao = new Conversao('USD', 'BRL', null);
  	this.possuiErro = false;
  }

  private converter(): void {
  	if(this.validarFormulario()){
  		this.conversorService
        .converter(this.conversao)
        .subscribe(
          response => this.conversaoResponse = response,
          error => this.possuiErro = true
        );
  	}
  }

	private validarFormulario(): boolean {
		return this.conversorForm.form.valid;
	}


}
