import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from '../services';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalculadoraComponent
      ],
      providers: [
        CalculadoraService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve garantir que 5 + 8 = 13', () => {
    let btn5 = fixture.debugElement.query(By.css('#btn5'));
    let btnSoma = fixture.debugElement.query(By.css('#btnSoma'));
    let btn8 = fixture.debugElement.query(By.css('#btn8'));
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));

    btn5.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSoma.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn8.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('13');
  });
});
