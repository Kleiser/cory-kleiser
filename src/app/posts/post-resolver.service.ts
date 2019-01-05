import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {IPost} from './ipost';
import {PostService} from './post.service';

@Injectable()
export class PostDataResolver implements Resolve<IPost> {

  constructor(private postService: PostService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost> | Promise<IPost> | IPost {

    const postId = route.params['postId'];

    return this.postService.fetchPost(postId);
  }
}
