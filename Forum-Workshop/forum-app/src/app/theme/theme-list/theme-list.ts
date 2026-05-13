import { Component, OnInit, inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { Theme } from '../../types/theme';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-theme-list',
  standalone: true,
  imports: [],
  templateUrl: './theme-list.html',
  styleUrl: './theme-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeListComponent implements OnInit {
  private apiService = inject(ApiService);
  private cdr = inject(ChangeDetectorRef);
  themes: Theme[] = [];

  ngOnInit(): void {
    this.apiService.getThemes().subscribe({
      next: (themes) => {
        this.themes = themes.sort((a, b) => b.subscribers.length - a.subscribers.length);
        this.cdr.markForCheck();
      },

      error: (err) => {
        console.error(err);
      }
    });
  }
}
