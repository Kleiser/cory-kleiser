import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {PostListingComponent} from './post-listing/post-listing.component';
import {PostsRoutingModule} from './posts-routing.module';
import {PostService} from './post.service';
import {PostDataResolver} from './post-resolver.service';

@NgModule({
  declarations: [
    PostListingComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
  ],
  providers: [
    PostService,
    PostDataResolver,
  ],
  bootstrap: [PostListingComponent, PostDetailComponent]
})
export class PostsModule { }
