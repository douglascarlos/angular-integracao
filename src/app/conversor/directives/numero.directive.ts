import { Directive, HostListener, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[numero]',
  providers: [{
  	provide: NG_VALUE_ACCESSOR,
  	useExisting: NumeroDirective,
  	multi: true
  }]
})
export class NumeroDirective implements ControlValueAccessor {

	private onChange;
	private onTouched;

  constructor(private element: ElementRef) { }

  @HostListener('keyup', ['$event'])
  public onKeyUp($event: any) {
  	let valor = $event.target.value;
  	let posicaoPontoDecimal = valor.indexOf('.');

  	valor = valor.replace(/[\D]/g, '');

  	if(posicaoPontoDecimal > 0){
  		valor = valor.substr(0, posicaoPontoDecimal) + '.' + valor.substr(posicaoPontoDecimal);
  	}

  	$event.target.value = valor;
  	this.onChange(valor);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public writeValue(value: any): void {
  	this.element.nativeElement.value = value;
  }

}
