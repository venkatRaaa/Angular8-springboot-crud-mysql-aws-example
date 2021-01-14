import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

  ROOT_URI:string = "http://sringbootcrudapp-env.eba-rpyr7m4n.us-east-2.elasticbeanstalk.com"

  constructor(private http:HttpClient) { }


  public doRegistration(user: User){
    return this.http.post(this.ROOT_URI+"/register",user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get(this.ROOT_URI+"/getAllUsers");
  }

  public getUserByEmail(email: string){
    return this.http.get(this.ROOT_URI+"/findUser/"+email);
  }

  public deleteUser(id: string | number){
    return this.http.delete(this.ROOT_URI+"/cancel/"+id);
  }
}
