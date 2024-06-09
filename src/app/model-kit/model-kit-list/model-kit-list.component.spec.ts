import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelKitListComponent } from './model-kit-list.component';

describe('ModelKitListComponent', () => {
  let component: ModelKitListComponent;
  let fixture: ComponentFixture<ModelKitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelKitListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelKitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
