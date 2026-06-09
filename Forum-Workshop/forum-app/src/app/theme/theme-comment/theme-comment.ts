import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header";
import { FooterComponent } from "../../shared/footer/footer";
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api';
import { UserService } from '../../services/User/user';
import { FormsModule } from '@angular/forms';
import { Theme } from '../../types/theme';

@Component({
  selector: 'app-theme-comment',
  imports: [HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './theme-comment.html',
  styleUrl: './theme-comment.css',
})
export class ThemeCommentComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private themeService = inject(ApiService);
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
        this.theme = theme;
      },
      error: (err) => {
        console.error('Error loading theme:', err);
      }
    });
      
  }

  addComment(themeId: string,postText: string): void {
    if (!postText) return;

    
  }
}

