import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertPopupService {

  showPopup(isStanding: boolean): void {
    const message = isStanding ? 'Time to switch to sitting.' : 'Time to switch to standing.';
    alert(message);
  }
}
