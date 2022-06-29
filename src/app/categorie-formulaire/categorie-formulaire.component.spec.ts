import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieFormulaireComponent } from './categorie-formulaire.component';

describe('CategorieFormulaireComponent', () => {
  let component: CategorieFormulaireComponent;
  let fixture: ComponentFixture<CategorieFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieFormulaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
