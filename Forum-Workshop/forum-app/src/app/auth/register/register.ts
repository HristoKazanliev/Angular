import { Component, inject } from '@angular/core';
import { UserService } from '../../services/User/user';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../../shared/header/header";
import { FooterComponent } from "../../shared/footer/footer";

@Component({
  selector: 'app-register',
  imports: [FormsModule, HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {
  private userService = inject(UserService);
  private router = inject(Router);

  username = '';
  email = '';
  password = '';
  rePassword = '';
  tel = '';

  register(): void {
    if (this.password !== this.rePassword) {
      alert('Passwords do not match!');
      return;
    }

    this.userService.register({
      _id: this.userService.userId,
      username: this.username,
      email: this.email,
      password: this.password,
      rePassword: this.rePassword,
      tel: this.tel,
      created_at: Date.now().toString(),
      posts: [],
      themes: []
    });

    this.router.navigate(['/home']);
  }
  


}
