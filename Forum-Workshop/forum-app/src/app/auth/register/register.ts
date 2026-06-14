import { Component, inject } from '@angular/core';
import { UserService } from '../../services/User/user';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from "../../shared/header/header";
import { FooterComponent } from "../../shared/footer/footer";
import { emailValidator } from '../../validators/emailValidator';
import { passwordMatchValidator } from '../../validators/passwordMatchValidator';

@Component({
  selector: 'app-register',
  imports: [FormsModule, HeaderComponent, FooterComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {
  private userService = inject(UserService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  // username = '';
  // email = '';
  // password = '';
  // rePassword = '';
  // tel = '';
  errorMessage = '';

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator]],
    tel: [''],
    passwords: this.fb.group(
    {
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: ['', [Validators.required]] 
    }, { validators: passwordMatchValidator}) // Custom group-level validator to check if password and rePassword match
  });

  get username()   { return this.form.get('username')!; }
  get email()      { return this.form.get('email')!; }
  get passwords()  { return this.form.get('passwords')!; }
  get password()   { return this.passwords.get('password')!; }
  get rePassword() { return this.passwords.get('rePassword')!; }


  register(): void {
    if (this.form.invalid) return;

     const { username, email, tel, passwords } = this.form.value;

    this.errorMessage = '';
    this.userService.register({
      _id: this.userService.userId,
      username: username!,
      email: email!,
      password: passwords!.password!,
      rePassword: passwords!.rePassword!,
      tel: tel ?? '',
      created_at: Date.now().toString(),
      posts: [],
      themes: []
    }).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Registration failed:', err);
        this.errorMessage = err.error?.message || 'Registration failed. Please try again.';
      }
    });

    this.router.navigate(['/home']);
  }
  


}
