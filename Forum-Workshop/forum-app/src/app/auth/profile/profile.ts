import { Component, inject } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer";
import { HeaderComponent } from "../../shared/header/header";
import { UserService } from '../../services/User/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [FooterComponent, HeaderComponent, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class ProfileComponent {
  private userService = inject(UserService);
  isEditing = false;

  user = this.userService.currentUser;

  editUser = {
    username: '',
    email: '',
    tel: ''
  };

  startEditing(): void {
    const currentUser = this.user();
    if (currentUser) {
      this.editUser = {
        username: currentUser?.username ?? '',
        email: currentUser?.email ?? '',
        tel: currentUser?.tel
      };
    }

    this.isEditing = true;
  }

  cancelEditing(): void {
    this.isEditing = false;
  }

  saveProfile(form: any): void {
    if (form.invalid) return;
    
    this.userService.updateProfile(this.editUser.username, this.editUser.email, this.editUser.tel).subscribe({
      next: (updatedUser) => {
        console.log();
        localStorage.setItem('user', JSON.stringify(updatedUser));
        this.isEditing = false;
      },
      error: (err) => {
        console.error('Update failed', err);
      }
    });

  }

}
