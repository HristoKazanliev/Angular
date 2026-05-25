import { Component } from '@angular/core';
import { ThemeListComponent } from "../theme-list/theme-list";
import { PostListComponent } from "../post-list/post-list";

@Component({
  selector: 'app-main',
  imports: [ThemeListComponent, PostListComponent],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class MainComponent {}
