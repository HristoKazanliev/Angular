import { Component, inject } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer";
import { HeaderComponent } from "../../shared/header/header";
import { UserService } from '../../services/User/user';

@Component({
  selector: 'app-profile',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class ProfileComponent {
  private userService = inject(UserService);

  user = this.userService.currentUser;
}
