import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-popup',
  templateUrl: './alert-popup.component.html',
  styleUrl: './alert-popup.component.css'
})
export class AlertPopupComponent implements OnInit {
  showPopup = false;

  ngOnInit(): void {}

  onAccept(): void {
    this.showPopup = false;
    console.log("Accepted");
  }

  onDeny(): void {
    this.showPopup = false;
    console.log("Denied");
  }

  togglePopupVisibility(visible: boolean): void {
    console.log('Popup visibility:', visible);
    this.showPopup = visible;
  }
}