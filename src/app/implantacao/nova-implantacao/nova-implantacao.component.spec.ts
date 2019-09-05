import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaImplantacaoComponent } from './nova-implantacao.component';

describe('NovaImplantacaoComponent', () => {
  let component: NovaImplantacaoComponent;
  let fixture: ComponentFixture<NovaImplantacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaImplantacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaImplantacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
