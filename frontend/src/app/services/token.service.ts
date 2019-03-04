import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  handle(token){
    this.set(token);
    console.log(this.payload(token))
  }

  set(token){
    localStorage.setItem('token',token);
  }

  get(){
    return localStorage.getItem('token');
  }

  remove(){
    localStorage.removeItem('token'); 
  }

  isValid(){
    const token = this.get();
    if(this.get()){
      const payload = this.payload(token);
      //if()
    }
  }

  payload(token){
    return token.split('.')[1];
  }
}
