import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListingComponent } from './post-listing.component';
import {PostService} from '../post.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('PostListingComponent', () => {
  let page: Page;
  let component: PostListingComponent;
  let fixture: ComponentFixture<PostListingComponent>;
  let postServiceStub: Partial<PostService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      declarations: [ PostListingComponent ],
      providers: [ PostService ]
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

  it('should have a pageTitle of "Posts"', () => {
    expect(page.pageTitle.textContent).toBe('Posts');
  });

  it('should have at least one post listed', () => {
    expect(page.postList.length).toBeGreaterThan(0);
  });

  /**
   * This function creates our component and sets up our page
   */
  function createComponent() {
    fixture = TestBed.createComponent(PostListingComponent);
    component = fixture.componentInstance;
    page = new Page();

    component.postList = [{title: 'TEST', text: 'TEST TEXT', date: 'Tue Jan 01 2019 03:25:24 GMT+0000 (UTC)', id: '1234TEST'}];

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
    get pageTitle() { return this.query<HTMLHeadingElement>('[data-test="post-listing-title"]'); }
    get postList() { return this.queryAll('[data-test="listed-post"]'); }

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
