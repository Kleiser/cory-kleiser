import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {postsEndpoint} from '../endpoints/endpoints';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  fetchPosts(): Observable<Object> {
    return this.http.get(postsEndpoint);
  }

  fetchPost(id: string): Observable<Object> {
    return this.http.get(`${postsEndpoint}/${id}`);
  }

}
