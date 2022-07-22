import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAddComponent } from './cliente-add.component';

describe('ClienteAddComponent', () => {
  let component: ClienteAddComponent;
  let fixture: ComponentFixture<ClienteAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
