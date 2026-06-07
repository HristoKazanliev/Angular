import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/User/user';
import { HeaderComponent } from "../../shared/header/header";
import { FooterComponent } from "../../shared/footer/footer";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [HeaderComponent, FooterComponent, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  private router = inject(Router);
  private userService = inject(UserService);

  email = '';
  password = '';
  errorMessage = '';

  login(): void {
    this.errorMessage = '';
    this.userService.login(this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        this.errorMessage = 'Invalid email or password';
      }
    });
  }
}
