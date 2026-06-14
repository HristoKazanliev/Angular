import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/User/user';
import { HeaderComponent } from "../../shared/header/header";
import { FooterComponent } from "../../shared/footer/footer";
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailValidator } from '../../validators/emailValidator';

@Component({
  selector: 'app-login',
  imports: [HeaderComponent, FooterComponent, FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  private router = inject(Router);
  private userService = inject(UserService);
  private fb = inject(FormBuilder);

  // email = '';
  // password = '';
  errorMessage = '';

  get email()    { return this.form.get('email')!; }
  get password() { return this.form.get('password')!; }

  form = this.fb.group({
    email: ['', [Validators.required, emailValidator]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  });

  login(): void {
    if (this.form.invalid) return;
    this.errorMessage = '';

    const { email, password } = this.form.value;

    this.userService.login(email!, password!).subscribe({
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
