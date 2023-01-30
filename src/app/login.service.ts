import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  validateUser(username: any,password: any){
    return true;
  }
}
