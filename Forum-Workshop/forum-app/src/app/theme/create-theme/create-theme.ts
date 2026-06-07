import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../../services/api';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../shared/header/header";
import { FooterComponent } from "../../shared/footer/footer";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-theme',
  imports: [HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './create-theme.html',
  styleUrl: './create-theme.css',
})
export class CreateThemeComponent {
  private themeService = inject(ApiService);
  private router = inject(Router);

  themeName = signal('');
  postText = signal('');

  createTheme(): void {
    if (!this.themeName() || !this.postText()) return;

    this.themeService.createTheme(this.themeName(), this.postText()).subscribe({
      next:(theme) => {
        console.log('Theme created:', theme);
        this.router.navigate(['/themes', theme._id]);
      },
      error: (err) => {
        console.error('Error creating theme:', err);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/home']);
  }
}
