import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailComponent } from './post-detail.component';
import {PostService} from '../post.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ActivatedRoute} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';
import {IPost} from '../ipost';
import {PostDataResolver} from '../post-resolver.service';

describe('PostDetailComponent', () => {
  let page: Page;
  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;
  let postServiceStub: Partial<PostService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ PostDetailComponent ],
      providers: [
        PostService,
        RouterTestingModule,
        PostDataResolver,
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({
              post: {
                title: 'TEST',
                text: 'TEST TEXT',
                date: 'Tue Jan 01 2019 03:25:24 GMT+0000 (UTC)',
                id: 'LKF234234DSLKF'
              }
            })
          }
        },
      ],
    });
  }));

  beforeEach(() => {
    // create component and test fixtures
    createComponent();
    // create service stub
    postServiceStub = {};
    // define elements

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  /**
   * This function creates our component and sets up our page
   */
  function createComponent() {
    fixture = TestBed.createComponent(PostDetailComponent);
    component = fixture.componentInstance;
    component.post = {
      title: 'TEST',
      text: 'TEST TEXT',
      date: 'Tue Jan 01 2019 03:25:24 GMT+0000 (UTC)',
      id: '1234ABCD'
    }
    page = new Page();
    // 1st change detection triggers ngOnInit
    fixture.detectChanges();
    return fixture.whenStable().then(() => {
      // 2nd change detection displays the async
      fixture.detectChanges();
    });
  }

  // Create Page Class
  class Page {

    // getter properties that wait to query the DOM until called
    get pageTitle() { return this.query<HTMLHeadingElement>('[data-test="post-detail-title"]'); }

    // spy step 1
    // showSoUserInfoSpy: jasmine.Spy;

    constructor() {
      // spy on component's method
      // this.showSoUserInfoSpy = spyOn(component, 'showSoUserInfo').and.callThrough();
    }

    //// query helpers ////
    private query<T>(selector: string): T {
      return fixture.nativeElement.querySelector(selector);
    }

    private queryAll<T>(selector: string): T[] {
      return fixture.nativeElement.querySelectorAll(selector);
    }
  }

});
