import {getTestBed, TestBed} from '@angular/core/testing';

import { PostService } from './post.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {postsEndpoint} from '../endpoints/endpoints';

describe('PostService', () => {
  let injector: TestBed;
  let service: PostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService]
    });
    injector = getTestBed();
    service = injector.get(PostService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#fetchPosts', () => {
    it('should return an Observable<any>', () => {
      const dummyPosts = 'value';
      service.fetchPosts().subscribe((data: any) => {
        expect(data).toBeTruthy();
      });

      const req = httpMock.expectOne(postsEndpoint);
      expect(req.request.method).toBe('GET');
      req.flush(dummyPosts);
    });
  });

});
