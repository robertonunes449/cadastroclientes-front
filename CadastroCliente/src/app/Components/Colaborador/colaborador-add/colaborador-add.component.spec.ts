import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorAddComponent } from './colaborador-add.component';

describe('ColaboradorAddComponent', () => {
  let component: ColaboradorAddComponent;
  let fixture: ComponentFixture<ColaboradorAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboradorAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
