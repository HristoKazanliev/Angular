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

  getThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>(this.themesUrl);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  createTheme(themeName: string, postText: string): Observable<Theme> {
    return this.http.post<Theme>(this.themesUrl, { themeName, postText }, { withCredentials: true });
  }
}
