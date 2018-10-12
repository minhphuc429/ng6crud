import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { PostService } from '../../post.service';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    angForm: FormGroup;

    constructor(private postService: PostService, private fb: FormBuilder, private router: Router) { }

    addPost(title, body) {
        this.postservice.addPost(title, body);
    }

    ngOnInit() {
        this.angForm = this.fb.group({
            title: ['', Validators.required ],
            body: ['', Validators.required ]
        });
    }

    onSubmit() {
        console.log(this.angForm);
        let title = this.angForm.value.title;
        let body = this.angForm.value.body;
        this.postService.createPost(title, body)
        .subscribe( data => {
            this.router.navigate(['index']);
        });
    }
}
