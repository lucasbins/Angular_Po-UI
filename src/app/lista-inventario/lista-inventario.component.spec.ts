import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInventarioComponent } from './lista-inventario.component';

describe('ListaInventarioComponent', () => {
  let component: ListaInventarioComponent;
  let fixture: ComponentFixture<ListaInventarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaInventarioComponent]
    });
    fixture = TestBed.createComponent(ListaInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
