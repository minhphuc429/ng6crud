import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './components/index/Post';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    baseUrl = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient) { }

    createPost(title, body) {
        const obj = {
            title: title,
            body: body
        };
        return this.http.post(`${this.baseUrl}`, obj);
    }

    getPosts() {
        return this.http.get(`${this.baseUrl}`);
    }

    editPost(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    updatePost(title, body, id) {

        const obj = {
            title: title,
            body: body
        };
        return this.http.put(`${this.baseUrl}/${id}`, obj);
    }

    deletePost(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
}
