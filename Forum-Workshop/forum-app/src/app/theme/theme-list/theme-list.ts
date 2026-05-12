import { Component, OnInit, inject } from '@angular/core';

import { Theme } from '../../types/theme';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-theme-list',
  standalone: true,
  imports: [],
  templateUrl: './theme-list.html',
  styleUrl: './theme-list.css',
})
export class ThemeListComponent implements OnInit {
  private apiService = inject(ApiService);
  themes: Theme[] = [];

  ngOnInit(): void {
    this.apiService.getThemes().subscribe({
      next: (themes) => {
        this.themes = themes.sort((a, b) => b.subscribers.length - a.subscribers.length);
      },

      error: (err) => {
        console.error(err);
      }
    });
  }
}
