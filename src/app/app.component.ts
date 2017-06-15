import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  power: number = 100;
  newPower: number = 100;

  setPower() {
    this.power = this.newPower;
  }
}
