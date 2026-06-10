import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header";
import { FooterComponent } from "../../shared/footer/footer";
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api';
import { UserService } from '../../services/User/user';
import { FormsModule } from '@angular/forms';
import { Theme } from '../../types/theme';

@Component({
  selector: 'app-theme-comment',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './theme-comment.html',
  styleUrl: './theme-comment.css',
})
export class ThemeCommentComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private themeService = inject(ApiService);
  private cdr = inject(ChangeDetectorRef);
  userService = inject(UserService);
  
  theme: Theme | null = null;
  newComment = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const themeId = params.get('id');

      if (!themeId) {
        // Handle the case where themeId is not present
        return;
      }

      this.loadTheme(themeId);
    });
  }

  loadTheme(themeId: string): void {
    this.themeService.getThemeById(themeId).subscribe({
      next: (theme) => {
        //console.log(theme);
        this.theme = theme;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error loading theme:', err);
      }
    });
      
  }

  addComment(): void {
    if (!this.newComment) return;

    this.themeService.createPost(this.theme!._id, this.newComment).subscribe(response => {
      console.log(response);
      // Clear the input field after successful comment submission
      this.newComment = '';
      // Reload the theme to display the new comment
      this.loadTheme(this.theme!._id);
    });
  }

  likePost(postId: string): void {
    this.themeService.likePost(postId).subscribe({
      next: () => {
        if (this.theme) {
          this.loadTheme(this.theme._id);
        }
      },
      error: (err) => {
        console.error('Error liking post:', err);
      } 
    });
  }

}

