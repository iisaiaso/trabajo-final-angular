import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarProdutComponent } from './mostrar-produt.component';

describe('MostrarProdutComponent', () => {
  let component: MostrarProdutComponent;
  let fixture: ComponentFixture<MostrarProdutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarProdutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarProdutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
