import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeSearchComponent } from './make-search.component';

describe('MakeSearchComponent', () => {
  let component: MakeSearchComponent;
  let fixture: ComponentFixture<MakeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
