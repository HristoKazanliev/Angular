import { Component } from '@angular/core';
import { ThemeListComponent } from "../theme-list/theme-list";
import { PostListComponent } from "../post-list/post-list";
import { HeaderComponent } from "../../shared/header/header";
import { FooterComponent } from "../../shared/footer/footer";

@Component({
  selector: 'app-main',
  imports: [ThemeListComponent, PostListComponent, HeaderComponent, FooterComponent],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class MainComponent {}
