import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
private firstObsSub: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstObsSub = interval(1000).subscribe(count => {
    //   console.log(count);
    // })


    //Observable.create 
    const customIntervalObs = Observable.create( observer => {
      //typically filled out with a normal code block with conditions to return
      // a piece or data, error, completion
      let count = 0;
      setInterval( () => {
        observer.next(count);
        if (count > 4) {
          observer.complete();      
        }
        if (count > 6) {
          observer.error( new Error('Count is too high'));      
        }
        count++;
      }, 1000);
    });

    // subscribing to defined observable :: Argument is arrow function to handle recieved data
    this.firstObsSub = customIntervalObs.subscribe( data => {    //data rcv'd clause
      console.log(data);
    }, error => {     //error clause
      console.log("logging ERROR");
      alert(error.message);
    }, () => {  //example of completion clause
      console.log("COMPLETED");
    })

  }

  ngOnDestroy(){
    this.firstObsSub.unsubscribe();
  }

}
