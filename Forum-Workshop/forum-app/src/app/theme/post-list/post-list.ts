import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api';
import { Post } from '../../types/post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-list',
  imports: [RouterLink],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostListComponent implements OnInit {
  private apiService = inject(ApiService);
  posts: Post[] = [];

  ngOnInit(): void {
    this.apiService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        //this.posts = posts;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
