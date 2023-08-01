import { Injectable } from '@angular/core';
import { IUserService } from './user-service';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserMockService  implements IUserService{

  constructor() { }
  logup(user: User): BehaviorSubject<User> {
    
    
  }
}
