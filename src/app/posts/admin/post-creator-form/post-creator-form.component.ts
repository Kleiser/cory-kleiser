import {Component, EventEmitter, Output} from '@angular/core';
import {FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-post-creator-form',
  templateUrl: './post-creator-form.component.html',
  styleUrls: ['./post-creator-form.component.scss']
})
export class PostCreatorFormComponent {
  postForm = this.fb.group({
    author: this.fb.group({
      fullName: [''],
      description: [''],
    }),
    post: this.fb.group({
      // TODO: add created filed on submit
      title: [''],
      subtitle: [''],
      body: [''],
      tags: this.fb.array([this.fb.control('')])
    })
  });

  @Output() submit: EventEmitter<any> = new EventEmitter();

  get tags() {
    return this.postForm.get('post').get('tags') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  addTag() {
    this.tags.push(this.fb.control(['']));
  }

  onSubmit() {
    this.submit.emit(this.postForm.value);
    console.warn(this.postForm.value);
  }

}
