import { computed, Injectable, signal } from '@angular/core';
import { User } from '../../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _currUser = signal<any | null>(null);
  
  currentUser = computed(() => this._currUser());
  isLoggedIn  = computed(() => !!this._currUser());

  // Hardcoded userId for subscriptions (as per workshop note)
  readonly userId = '5fa64b162183ce1728ff371d';

  contrsuctor() {
    this.loadUser();
  }

  register(user: User ) {
    // const newUser = {
    //   _id: this.userId,
    //   username: user.username,
    //   email: user.email,
    //   password: user.password
    // };

    localStorage.setItem('user', JSON.stringify(user));
    this._currUser.set(user);
  }

  login(email: string, password: string) {
    const user = {
      _id: this.userId,
      username: 'Jhon Doe',
      email,
      password
    };

    localStorage.setItem('user', JSON.stringify(user));
    this._currUser.set(user);
  }

  logout() {
    localStorage.removeItem('user');
    this._currUser.set(null);
  }

  private loadUser() {
    const userData = localStorage.getItem('user');
    if (userData) {
      this._currUser.set(JSON.parse(userData));
    }
  }
}
