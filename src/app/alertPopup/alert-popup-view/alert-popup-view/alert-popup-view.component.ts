import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-popup-view',
  templateUrl: './alert-popup-view.component.html',
  styleUrl: './alert-popup-view.component.css'
})
export class AlertPopupViewComponent implements OnInit {
  showPopup = false;

  ngOnInit(): void {
    this.startPopupTimer();
  }

  startPopupTimer(): void {
      //Timer for popup
      setTimeout(() => {
        this.showPopup = true;
      }, 5000) //Display popup after 5 sec
  }

  onAccept(): void {
    this.showPopup = false;
    console.log("Accepted");

    this.startPopupTimer();
  }

  onDeny(): void {
    this.showPopup = false;
    console.log("Denied");

    this.startPopupTimer();
  }
}