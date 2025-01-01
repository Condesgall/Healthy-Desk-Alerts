import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { HomeService } from '../home/home.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertPopupComponent } from './alert-popup-view/alert-popup.component';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertPopupService implements OnDestroy {
  private isPopupVisible = false;
  private subscriptions = new Subscription();

  constructor(
    private homeService: HomeService,
    private dialog: MatDialog,
    private zone: NgZone
  ) {
    this.subscriptions.add(
      this.homeService.dynamicMessage$.subscribe((message) => {
        if (message && !this.isPopupVisible) {
          this.showAlert(message);
        }
      })
    );

    this.subscriptions.add(
      this.homeService.standingTimeReached$.subscribe((isReached) => {
        if (isReached && !this.isPopupVisible) {
          this.showAlert('It is time to stand up');
        }
      })
    );

    this.subscriptions.add(
      this.homeService.sittingTimeReached$.subscribe((isReached) => {
        if (isReached && !this.isPopupVisible) {
          this.showAlert('It is time to sit down');
        }
      })
    );
  }

  private showAlert(message: string): void {
    if (this.isPopupVisible) {
      return;
    }

    this.isPopupVisible = true;

    this.zone.run(() => {
      const dialogRef = this.dialog.open(AlertPopupComponent, {
        data: { message },
      });

      dialogRef.afterClosed().subscribe({
        next: () => {
          this.isPopupVisible = false;
        },
        error: (err) => {
          console.error('Error closing the dialog:', err);
          this.isPopupVisible = false; // Reset visibility even if there's an error
        },
      });
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe(); // Ensure all subscriptions are cleaned up
  }
}
