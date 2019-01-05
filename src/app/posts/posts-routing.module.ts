import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostListingComponent} from './post-listing/post-listing.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {PostDataResolver} from './post-resolver.service';
import {PostCreatorFormComponent} from './admin/post-creator-form/post-creator-form.component';
import {AuthGuard} from '../auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PostListingComponent,
  },
  {
    path: 'create',
    component: PostCreatorFormComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    // TODO: create PostCreatorModule and implement `canLoad: [AuthGuard],` so browser won't load content if user isn't authorized
  },
  {
    path: ':postId',
    component: PostDetailComponent,
    resolve: {
      post: PostDataResolver
    }
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class PostsRoutingModule {}
