import { BehaviorSubject } from "rxjs";
import { User } from "../model/user";

export interface IUserService{

    logup(user:User) : BehaviorSubject<User>;
    getUser(id:string) : BehaviorSubject<User>;
    login(
        {
            
        }
    ):BehaviorSubject<User>;

}