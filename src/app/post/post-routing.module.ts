import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostListingComponent} from './post-listing/post-listing.component';
import {AppComponent} from '../app.component';
import {PostDetailComponent} from './post-detail/post-detail.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostListingComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  bootstrap: [AppComponent]
})
export class PostRoutingModule {}
