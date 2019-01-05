import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {PostListingComponent} from './post-listing/post-listing.component';
import {PostsRoutingModule} from './posts-routing.module';
import {PostService} from './post.service';
import {PostDataResolver} from './post-resolver.service';
import { PostCreatorFormComponent } from './admin/post-creator-form/post-creator-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    PostListingComponent,
    PostDetailComponent,
    PostCreatorFormComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService,
    PostDataResolver,
  ],
  bootstrap: [PostListingComponent, PostDetailComponent, PostCreatorFormComponent]
})
export class PostsModule { }
