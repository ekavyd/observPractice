import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private userService: UserService) {}
  userActivated = false;
  alertSub : Subscription;
  count = 0;

  ngOnInit() {
    // this.alertSub =  this.userService.activatedEmitter.subscribe( activated => {
    //   this.userActivated = activated;
    // })
    this.alertSub =  this.userService.activateSub.subscribe( activated => {
      this.count = activated;
    })
  }

  ngOnDestroy(){
    this.alertSub.unsubscribe();
  }
}
