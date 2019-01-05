import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostListingComponent} from './post-listing/post-listing.component';
import {AppComponent} from '../app.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {PostDataResolver} from './post-resolver.service';
import {PostCreatorFormComponent} from './admin/post-creator-form/post-creator-form.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostListingComponent
  },
  {
    path: 'posts/create',
    component: PostCreatorFormComponent
  },
  {
    path: 'posts/:postId',
    component: PostDetailComponent,
    resolve: {
      post: PostDataResolver
    }
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  bootstrap: [AppComponent]
})
export class PostRoutingModule {}
