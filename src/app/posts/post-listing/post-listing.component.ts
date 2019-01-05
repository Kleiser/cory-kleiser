import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {PostService} from '../post.service';
import {IPost} from '../ipost';

@Component({
  selector: 'app-post-listing',
  templateUrl: './post-listing.component.html',
  styleUrls: ['./post-listing.component.scss']
})
export class PostListingComponent implements OnInit {
  postList: IPost[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.fetchPosts().subscribe((posts: IPost[]) => this.postList = posts);
  }

}
