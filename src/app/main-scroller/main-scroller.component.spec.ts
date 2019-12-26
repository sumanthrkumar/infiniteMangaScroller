import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScrollerComponent } from './main-scroller.component';

describe('MainScrollerComponent', () => {
  let component: MainScrollerComponent;
  let fixture: ComponentFixture<MainScrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainScrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
