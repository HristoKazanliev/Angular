import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../shared/header/header";
import { FooterComponent } from "../shared/footer/footer";
import { UserService } from '../services/User/user';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  userService = inject(UserService);
}
