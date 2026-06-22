import { Injectable, signal } from '@angular/core';

export interface Notification {
  message: string;
  type: 'error' | 'success';
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notification = signal<Notification | null>(null);

  showError(message: string): void {
    this.notification.set({ message, type: 'error' });
    this.autoDismiss();
  }

  showSuccess(message: string): void {
    this.notification.set({ message, type: 'success' });
    this.autoDismiss();
  }

  clear(): void {
    this.notification.set(null);
  }

  private autoDismiss(): void {
    setTimeout(() => this.clear(), 4000);  // hide after 4 seconds
  }
}
