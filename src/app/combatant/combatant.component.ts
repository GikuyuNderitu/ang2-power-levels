import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-combatant',
  templateUrl: './combatant.component.html',
  styleUrls: ['./combatant.component.sass']
})
export class CombatantComponent implements OnInit {
  private _power: number;

  @Input() 
  set power(power : number) {
    this._power = power;
  }

  @Input() multiplier: number;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

  get power() : number {
    return this._power;
  }

}
