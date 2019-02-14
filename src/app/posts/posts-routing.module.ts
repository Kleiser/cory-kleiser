import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostListingComponent} from './post-listing/post-listing.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {PostDataResolver} from './post-resolver.service';
import {AuthGuard} from '../auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PostListingComponent,
  },
  {
    path: 'create',
    loadChildren: './admin/post-creator/post-creator.module#PostCreatorModule',
    pathMatch: 'full',
    canLoad: [AuthGuard]
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
