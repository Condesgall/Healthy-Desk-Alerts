import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './home-view/home-view.component';
import { NavigationModule } from '../navigation/navigation.module';
import { AccountPopupModule } from '../account-popup/account-popup.module';
import { FormsModule } from '@angular/forms';
import { AlertPopupModule } from '../alert-popup/alert-popup.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeViewComponent,
  ],
  imports: [
    CommonModule,
    NavigationModule,
    FormsModule,
    AccountPopupModule,
    HttpClientModule,
    AlertPopupModule
  ],
  exports: [
    HomeViewComponent
  ]
})
export class HomeModule { }