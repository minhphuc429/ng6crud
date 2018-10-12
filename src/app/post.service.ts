import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './components/index/Post';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    uri = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient) { }

    addPost(title, body) {
        const obj = {
            title: title,
            body: body
        };
        this.http.post(`${this.uri}`, obj)
        .subscribe(res => console.log('Done'));
    }

    getPosts() {
        return this.http.get(`${this.uri}`);
    }

    editPost(id) {
        return this.http.get(`${this.uri}/${id}`);
    }

    updatePost(title, body, id) {

        const obj = {
            title: title,
            body: body
        };
        this.http.put(`${this.uri}/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }

    deletePost(id) {
        return this.http.get(`${this.uri}/${id}`);
    }
}
