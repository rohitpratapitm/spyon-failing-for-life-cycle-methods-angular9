import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'spyon-failing-for-life-cycle-methods-angular9';

  ngOnInit(): void {
    console.log('I am inside ngOnInit.');
    this.fun();
  }

  fun(): void {
    console.log('I am inside FUN.');
  }
}
