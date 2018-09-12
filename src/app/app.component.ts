import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  secondes: number;
  counterSubscription: Subscription
  
  constructor() {
    }
    ngOnInit() {

      const counter = interval(1000);  

      this.counterSubscription  = counter.subscribe(
        (value) => {
          this.secondes = value;
        },
        (error) => {
          console.log('Uh-oh,  an error occured! : '+ error);
        },
        () => {
          console.log('Observable complete!');
        }
      );
    }
    ngOnDestroy() {
      this.counterSubscription.unsubscribe();
    }
}
