import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { 
	Conversao,
	ConversaoResponse 
} from '../models';

@Injectable()
export class ConversorService {

  private readonly BASE_URL = 'http://api.fixer.io/latest';

  constructor(private http: Http) {}

  public converter(conversao: Conversao): Observable<ConversaoResponse> {
  	let parameters = `?base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;

  	return this.http
      .get(this.BASE_URL + parameters)
      .map(response => response.json() as ConversaoResponse)
      .catch(error => Observable.throw(error));
  }

  public cotacaoPara(conversaoResponse: ConversaoResponse, 
		conversao: Conversao): number {
  	if(conversaoResponse === undefined){
  		return 0;
  	}
  	return conversaoResponse.rates[conversao.moedaPara];
  }

  public cotacaoDe(conversaoResponse: ConversaoResponse, 
		conversao: Conversao): string {
  	if(conversaoResponse === undefined){
  		return '0';
  	}
  	return (1 / conversaoResponse.rates[conversao.moedaPara]).toFixed(4);
  }

  public dataCotacao(conversaoResponse: ConversaoResponse): string {
    if(conversaoResponse === undefined){
      return '';
    }
    return conversaoResponse.date;
  }

}
