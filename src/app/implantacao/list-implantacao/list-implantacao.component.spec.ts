import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListImplantacaoComponent } from './list-implantacao.component';

describe('ImplantacaoComponent', () => {
  let component: ListImplantacaoComponent;
  let fixture: ComponentFixture<ListImplantacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListImplantacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListImplantacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
