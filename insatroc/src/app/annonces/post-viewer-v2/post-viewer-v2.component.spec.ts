import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostViewerV2Component } from './post-viewer-v2.component';

describe('PostViewerV2Component', () => {
  let component: PostViewerV2Component;
  let fixture: ComponentFixture<PostViewerV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostViewerV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostViewerV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
