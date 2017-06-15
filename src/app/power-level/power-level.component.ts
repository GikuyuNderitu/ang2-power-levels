import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-power-level',
  templateUrl: './power-level.component.html',
  styleUrls: ['./power-level.component.sass']
})
export class PowerLevelComponent implements OnInit {
  private _power : number
  @Input() 
  set power(power : number) {
    this._power = power;
    this.calculateLevel(power);
  }
  @Input() multiplier: number;

  level :number;

  constructor() { }

  ngOnInit() {
    this.calculateLevel(this._power);
  }

  calculateLevel(power : number) {
    this.level = this._power * this.multiplier;
  }

}
