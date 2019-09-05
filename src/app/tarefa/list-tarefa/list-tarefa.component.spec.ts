import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTarefaComponent } from './list-tarefa.component';

describe('EditTarefaComponent', () => {
  let component: ListTarefaComponent;
  let fixture: ComponentFixture<ListTarefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTarefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
