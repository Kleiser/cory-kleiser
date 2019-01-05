import {getTestBed, TestBed} from '@angular/core/testing';

import { PostService } from './post.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {postsEndpoint} from '../endpoints/endpoints';
import {IPost} from './ipost';

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
    it('should return a value', () => {
      const dummyPosts = 'value';
      service.fetchPosts().subscribe((data: any) => {
        expect(data).toBeTruthy();
      });

      const req = httpMock.expectOne(postsEndpoint);
      expect(req.request.method).toBe('GET');
      req.flush(dummyPosts);
    });
  });

  describe('#fetchPost', () => {
    it('should return a value', () => {
      const dummyPost: IPost = {
        title: 'TEST',
        text: 'TEST TEXT',
        date: 'Tue Jan 01 2019 03:25:24 GMT+0000 (UTC)',
        id: 'LKF234234DSLKF'
      };
      service.fetchPost('LKF234234DSLKF').subscribe((data: IPost) => {
        expect(data).toBe(dummyPost);
      });
      const req = httpMock.expectOne(`${postsEndpoint}/LKF234234DSLKF`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyPost);
    });
  });

});
