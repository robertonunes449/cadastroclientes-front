import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteReadAllComponent } from './cliente-read-all.component';

describe('ClienteReadAllComponent', () => {
  let component: ClienteReadAllComponent;
  let fixture: ComponentFixture<ClienteReadAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteReadAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteReadAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
