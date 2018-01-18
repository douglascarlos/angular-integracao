import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComponent } from './listar.component';
import { TarefaService } from '../shared';

describe('ListarComponent', () => {
  let component: ListarComponent;
  let fixture: ComponentFixture<ListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarComponent ],
      providers: [ TarefaService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(ListarComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

});
