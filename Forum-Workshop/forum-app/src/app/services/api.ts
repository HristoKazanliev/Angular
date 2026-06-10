import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Theme } from "../types/theme";
import { Post } from "../types/post";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //private http = inject(HttpClient);
   // Make it private because we want ot use it only into the class and not into the HTML template
  constructor(private http: HttpClient) { }

  private themesUrl = 'http://localhost:3000/api/themes';
  private postsUrl = 'http://localhost:3000/api/posts?limit=5';
  private likesUrl = 'http://localhost:3000/api/likes';

  getThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>(this.themesUrl);
  }

  getThemeById(themeId: string): Observable<Theme> {
    return this.http.get<Theme>(`${this.themesUrl}/${themeId}`);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  createTheme(themeName: string, postText: string): Observable<Theme> {
    return this.http.post<Theme>(this.themesUrl, { themeName, postText }, { withCredentials: true });
  }

  createPost(themeId: string, postText: string): Observable<Post> {
    return this.http.post<Post>(`${this.themesUrl}/${themeId}`,{ postText }, { withCredentials: true });
  }

  likePost(postId: string): Observable<Post> {
    return this.http.put<Post>(`${this.likesUrl}/${postId}`, {}, { withCredentials: true });
  }
}
