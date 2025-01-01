import { Component, OnDestroy, OnInit  } from '@angular/core';
import { AlertPopupService } from '../alert-popup.service';
import { HomeService } from '../../home/home.service';
import { Profile } from '../../models/ProfileModel';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert-popup',
  templateUrl: './alert-popup.component.html',
  styleUrls: ['./alert-popup.component.css'],
})

export class AlertPopupComponent implements OnInit, OnDestroy {
  
  showPopup: boolean = false;
  message: string = '';
  private subscription!: Subscription;

  constructor(private alertPopupService: AlertPopupService) {}

  ngOnInit(): void {

    this.alertPopupService.updateTimerForNewProfile();

    this.subscription = this.alertPopupService.alertPopupVisible$.subscribe((alertState) => {
      this.showPopup = alertState.visible;
      this.message = alertState.visible ? alertState.message : '';
    });
  }


 /* startPopupTimer(): void {
      //Timer for popup
      setTimeout(() => {
        this.showPopup = true;
      }, 10000) //Display popup after x amount of sec
  }*/

  onAccept(): void {
    this.alertPopupService.stopTimer();
    this.showPopup = false;
    //this.setPopupTimer();
  }

  onDeny(): void {
    this.alertPopupService.stopTimer();
    this.showPopup = false;
    //console.log("Denied");
    //this.setPopupTimer();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}