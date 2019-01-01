import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {PostListingComponent} from './post-listing/post-listing.component';
import {PostRoutingModule} from './post-routing.module';

@NgModule({
  declarations: [
    PostListingComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
