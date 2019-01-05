import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {postsEndpoint} from '../endpoints/endpoints';
import {IPost} from './ipost';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  fetchPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(postsEndpoint);
  }

  fetchPost(id: string): Observable<IPost> {
    return this.http.get<IPost>(`${postsEndpoint}/${id}`);
  }

}
