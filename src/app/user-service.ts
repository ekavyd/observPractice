import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from 'rxjs';

//shortcut to add to module -- use providedIn
@Injectable({providedIn: 'root'})
export class UserService {
    // activatedEmitter = new EventEmitter<boolean>();
    activatedEmitter = new Subject<boolean>();


    activateSub = new Subject<number>();

}