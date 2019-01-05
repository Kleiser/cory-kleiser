import { TestBed } from '@angular/core/testing';

import { PostDataResolver } from './post-resolver.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {PostService} from './post.service';

describe('PostDataResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [PostDataResolver, PostService]
  }));

  it('should be created', () => {
    const service: PostDataResolver = TestBed.get(PostDataResolver);
    expect(service).toBeTruthy();
  });
});
