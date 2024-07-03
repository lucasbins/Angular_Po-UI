import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailInventarioComponent } from './detail-inventario.component';

describe('DetailInventarioComponent', () => {
  let component: DetailInventarioComponent;
  let fixture: ComponentFixture<DetailInventarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailInventarioComponent]
    });
    fixture = TestBed.createComponent(DetailInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
