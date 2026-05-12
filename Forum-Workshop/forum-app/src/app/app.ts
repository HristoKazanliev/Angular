import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeListComponent } from './theme/theme-list/theme-list';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ThemeListComponent 
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('forum-app');
}
