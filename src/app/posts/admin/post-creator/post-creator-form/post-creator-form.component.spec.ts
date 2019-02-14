import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreatorFormComponent } from './post-creator-form.component';

describe('PostCreatorComponent', () => {
  let component: PostCreatorFormComponent;
  let fixture: ComponentFixture<PostCreatorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCreatorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCreatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
