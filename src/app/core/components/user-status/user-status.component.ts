import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.scss'],
})
export class UserStatusComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();

  constructor(
    public authService: AuthService,
    private coreService: CoreService
  ) {}

  login(): void {
    this.authService.loginWithPopup();

    this.authService.user$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((user) => {
        if (user?.email) {
          this.coreService
            .createUser(user.email)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe();
          localStorage.setItem('email', user.email);
        }
      });
  }

  logout(): void {
    this.authService.logout();
    localStorage.removeItem('email');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
