import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoInventarioComponent } from './novo-inventario.component';

describe('NovoInventarioComponent', () => {
  let component: NovoInventarioComponent;
  let fixture: ComponentFixture<NovoInventarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovoInventarioComponent]
    });
    fixture = TestBed.createComponent(NovoInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
