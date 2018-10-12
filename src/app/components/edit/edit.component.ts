import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Post } from '../index/Post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  post: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private postservice: PostService,
    private fb: FormBuilder) {
      this.createForm();
    }
    createForm() {
      this.angForm = this.fb.group({
             title: ['', Validators.required ],
              body: ['', Validators.required ]
         });
      }

    updatePost(title, body) {
      this.route.params.subscribe(params => {
          this.postservice.updatePost(title, body, params['id']);
          this.router.navigate(['index']);
      });
    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.postservice.editPost(params['id']).subscribe(res => {
          this.post = res;
      });
    });
  }
}
