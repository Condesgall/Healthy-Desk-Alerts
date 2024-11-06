import { Component } from '@angular/core';
import { Desk, DeskApiService } from '../../services/desk-api.service';

@Component({
  selector: 'app-desk-connect-view',
  templateUrl: './desk-connect-view.component.html',
  styleUrl: './desk-connect-view.component.css'
})
export class DeskConnectViewComponent {
  deskIds: string[] = [];
  desksInfos: Desk[] = [];
  isLoading: boolean = false;

  constructor(private deskApiService: DeskApiService) {}
  
  loadDesksAndInfos() {
    this.deskIds = [];
    this.desksInfos = [];
    this.isLoading = true;

    // Gets all desk ID's
    this.deskApiService.getDesks().subscribe(ids => {
      this.deskIds = ids;

      //For each ID it got, gets details about the desk and adds them to desksInfos array
      this.deskIds.forEach(id => {
        this.deskApiService.getDeskInfo(id).subscribe(deskData => {
          this.desksInfos.push(deskData);
        });
      });
      this.isLoading = false;
    });
  }
}