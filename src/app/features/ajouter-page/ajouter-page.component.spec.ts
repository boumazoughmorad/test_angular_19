import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPageComponent } from './ajouter-page.component';

describe('AjouterPageComponent', () => {
  let component: AjouterPageComponent;
  let fixture: ComponentFixture<AjouterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjouterPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
