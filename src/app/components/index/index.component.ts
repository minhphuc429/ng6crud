import { Component, OnInit } from '@angular/core';
import { Post } from './Post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  posts: Post[];

  constructor(private postservice: PostService) { }

  deletePost(id) {
    this.postservice.deletePost(id).subscribe(res => {
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.postservice
      .getPosts()
      .subscribe((data: Post[]) => {
      this.posts = data;
    });
  }
}
