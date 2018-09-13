import { User } from "../models/User.model";
import { Subject } from "rxjs";

export class UserService{
    private users: User[] = [
        new User('Manu', 'DeCruz', 'manuBGdeLAfpa@sisiLaFamille.tmtc','jus d\'orange', ['coder', 'boire du café'])
    ];
    userSubject = new Subject<User[]>();
    
    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser (user: User) {
        this.users.push(user);
        this.emitUsers
    }
}