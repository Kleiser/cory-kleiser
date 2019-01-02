import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {PostListingComponent} from './post-listing/post-listing.component';
import {PostRoutingModule} from './post-routing.module';
import {PostService} from './post.service';
import {PostDataResolver} from './post-resolver.service';

@NgModule({
  declarations: [
    PostListingComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  providers: [
    PostService,
    PostDataResolver,
  ]
})
export class PostModule { }
