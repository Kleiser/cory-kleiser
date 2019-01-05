import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {PostListingComponent} from './post-listing/post-listing.component';
import {PostRoutingModule} from './post-routing.module';
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
    PostRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService,
    PostDataResolver,
  ]
})
export class PostModule { }
