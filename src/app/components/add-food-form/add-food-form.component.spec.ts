import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodFormComponent } from './add-food-form.component';

describe('AddFoodFormComponent', () => {
  let component: AddFoodFormComponent;
  let fixture: ComponentFixture<AddFoodFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFoodFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFoodFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
