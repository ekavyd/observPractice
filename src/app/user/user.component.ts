import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;
  state = false;
  count : number = 0;

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }

  onActivate(){
    this.state = (!this.state);
    // this.userService.activatedEmitter.emit(this.state);

    //for when using a subject instead
    //this.userService.activatedEmitter.next(this.state);

    this.userService.activateSub.next(this.count++);
  }
}
