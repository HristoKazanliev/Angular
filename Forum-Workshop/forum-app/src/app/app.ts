import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeListComponent } from './theme/theme-list/theme-list';
import { PostListComponent } from './theme/post-list/post-list';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ThemeListComponent,
    PostListComponent 
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('forum-app');
}
