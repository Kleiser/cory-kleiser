import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostCreatorFormComponent} from './post-creator-form/post-creator-form.component';

const routes: Routes = [
  {
    path: '',
    component: PostCreatorFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostCreatorRoutingModule { }
