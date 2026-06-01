import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../services/User/user';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  private router = inject(Router);
  userService = inject(UserService);

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/home']);
  }
}
