import { computed, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  private loginUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient) {
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

  login(email: string, password: string): Observable<User> {
    return new Observable((observer) => {
      this.http.post<User>(this.loginUrl, { email, password }, { withCredentials: true }).subscribe({
        next: (user) => {
          localStorage.setItem('user', JSON.stringify(user));
          this._currUser.set(user);
          observer.next(user);
          observer.complete();
        },
        error: (err) => {
          console.error('Login error:', err);
          observer.error(err);
        }
      });
    });
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
