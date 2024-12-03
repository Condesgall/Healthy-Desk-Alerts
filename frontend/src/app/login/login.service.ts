import { Injectable } from '@angular/core';
import { LoginViewComponent } from './login-view/login-view.component';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { User } from '../models/UserModel';
import { response } from 'express';
import { map, Observable, retry } from 'rxjs';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  
  defaultHeight!: number;
  //keep user data in here as loged in user
  loggedInUser!: User;
  apiUrl = "http://localhost:3000/api"
  router: any;
  isManager = false;

  constructor(private http: HttpClient) { }

  //Send user data to database
  //Return if user is in database and if credentials are correct
  logIn(username: string, password: string): Observable<{success: boolean, token: string}> {
    const body = { username, password };

    return this.http.post<{success: boolean, token: string}>(`${this.apiUrl}/user`, body).pipe(
        map(response => {
            if (!response || !response.token) {
              return response;
            } 
            else {
              console.log(response.token);
              localStorage.setItem('token', response.token);

              return response;
            }
        })
    );
}


  logOut() {
    localStorage.removeItem('token');
  }

  // Decodes the token to receive username. Returns it in a string.
  getCurrentUsername() {
    const token = localStorage.getItem('token');
    if(token) {
      const decodedUser: any = jwtDecode(token);
      return decodedUser.username;
    }
    else {
      console.log("Error getting the username. Token is null.")
      return null;
    }
  }

  // Decodes the token to receive isManager. Returns it in a bool.
  getIsManager() {
    const token = localStorage.getItem('token');
    if(token) {
      const decodedUser: any = jwtDecode(token);
      return decodedUser.isManager;
    }
    else {
      console.log("Error getting isManager permissions. Token is null.")
      return null;
    }
  }
}


