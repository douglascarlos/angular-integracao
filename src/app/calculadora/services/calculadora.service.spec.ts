import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
  });

  it('should be created', inject(
  	[CalculadoraService], 
  	(service: CalculadoraService) => {
	    expect(service).toBeTruthy();
	  }
	));

	it('deve garantir que 3 + 4 = 7', 
		inject([CalculadoraService],(service: CalculadoraService) => {
			let resultado = service.calcular(3, 4, CalculadoraService.SOMA);
			expect(resultado).toEqual(7);
		})
	);

	it('deve garantir que 3 - 4 = -1', 
		inject([CalculadoraService],(service: CalculadoraService) => {
			let resultado = service.calcular(3, 4, CalculadoraService.SUBTRACAO);
			expect(resultado).toEqual(-1);
		})
	);

	it('deve garantir que 3 / 4 = 0.75', 
		inject([CalculadoraService],(service: CalculadoraService) => {
			let resultado = service.calcular(3, 4, CalculadoraService.DIVISAO);
			expect(resultado).toEqual(0.75);
		})
	);

	it('deve garantir que 3 * 4 = 12', 
		inject([CalculadoraService],(service: CalculadoraService) => {
			let resultado = service.calcular(3, 4, CalculadoraService.MULTIPLICACAO);
			expect(resultado).toEqual(12);
		})
	);

	it('deve retornar 0 para operação inválida', 
		inject([CalculadoraService],(service: CalculadoraService) => {
			let resultado = service.calcular(3, 4, '^');
			expect(resultado).toEqual(0);
		})
	);

});
