import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPageAjouterComponent } from './header-page-ajouter.component';

describe('HeaderPageAjouterComponent', () => {
  let component: HeaderPageAjouterComponent;
  let fixture: ComponentFixture<HeaderPageAjouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderPageAjouterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPageAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
