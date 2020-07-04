import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemsAddComponent } from './cart-items-add.component';

describe('CartItemsAddComponent', () => {
  let component: CartItemsAddComponent;
  let fixture: ComponentFixture<CartItemsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartItemsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
