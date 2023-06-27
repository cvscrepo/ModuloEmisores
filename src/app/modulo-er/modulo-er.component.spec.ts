import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloERComponent } from './modulo-er.component';

describe('ModuloERComponent', () => {
  let component: ModuloERComponent;
  let fixture: ComponentFixture<ModuloERComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloERComponent]
    });
    fixture = TestBed.createComponent(ModuloERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
