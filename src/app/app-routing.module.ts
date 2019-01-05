import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: './posts/posts.module#PostsModule'
  },
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
