import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Conversao, ConversaoResponse } from '../models';
import { ConversorService } from '../services';

@Component({
  selector: 'modal-cotacao',
  templateUrl: './modal-cotacao.component.html',
  styleUrls: ['./modal-cotacao.component.css']
})
export class ModalCotacaoComponent implements OnInit {

	@Input() id: string;
	@Input() conversaoResponse: ConversaoResponse;
	@Input() conversao: Conversao = new Conversao();
	@Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private conversorService: ConversorService) { }

  ngOnInit() {
  }

  private get valorConvertido(): string {
  	if(this.conversaoResponse == undefined){
  		return '0';
  	}
  	return (this.conversao.valor * this.conversaoResponse.rates[this.conversao.moedaPara]).toFixed(2);
  }

  private get cotacaoPara(): number {
  	return this.conversorService.cotacaoPara(this.conversaoResponse, this.conversao);
  }

  private get cotacaoDe(): string {
  	return this.conversorService.cotacaoDe(this.conversaoResponse, this.conversao);
  }

  private get dataCotacao(): string {
  	return this.conversorService.dataCotacao(this.conversaoResponse);
  }

  private novaConsulta(): void {
  	this.onConfirm.emit();
  }

}
