import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PostCreatorRoutingModule } from './post-creator-routing.module';
import {PostCreatorFormComponent} from './post-creator-form/post-creator-form.component';
import {PostService} from '../../post.service';

@NgModule({
  declarations: [
    PostCreatorFormComponent,
  ],
  imports: [
    CommonModule,
    PostCreatorRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService
  ],
})
export class PostCreatorModule { }
