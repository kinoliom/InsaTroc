import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreateReaComponent } from './post-create-rea.component';

describe('PostCreateReaComponent', () => {
  let component: PostCreateReaComponent;
  let fixture: ComponentFixture<PostCreateReaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCreateReaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCreateReaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
