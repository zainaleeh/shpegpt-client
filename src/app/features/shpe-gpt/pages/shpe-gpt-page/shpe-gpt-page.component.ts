import { Component, OnDestroy } from '@angular/core';
import { ShpeGPTService } from '../../services/shpe-gpt.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-shpe-gpt-page',
  templateUrl: './shpe-gpt-page.component.html',
  styleUrls: ['./shpe-gpt-page.component.scss'],
})
export class ShpeGPTPageComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();

  messages: any[] = [];
  isLoading = false;

  constructor(private shpeGPTService: ShpeGPTService) {}

  onMessageSend(message: any): void {
    this.isLoading = true;
    this.messages.push({ text: message, sender: 'user' });
    this.shpeGPTService
      .sendMessage(message)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => {
        this.messages.push(response);
        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
