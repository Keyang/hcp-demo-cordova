import { Component } from '@angular/core';

import { AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private _num1: string;

  set num1(val) {
    console.log(`set number 1 to ${val}`)
    this._num1 = val;
  }
  get num1() {
    return this._num1;
  }

  private _num2: string;

  set num2(val) {
    console.log(`set number 2 to ${val}`)
    this._num2 = val;
  }
  get num2() {
    return this._num2;
  }
  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController
  ) {
  }

  calc() {
    const total = parseFloat(this.num1) + parseFloat(this.num2);
    if (isNaN(total)) {
      this.alertCtrl.create({
        title: 'Oops, Wrong number',
        subTitle: `The input number seems wrong. num1: ${this.num1} num2: ${this.num2}`,
        buttons: ['OK']
      }).present();
      console.error(`The input number seems wrong. num1: ${this.num1} num2: ${this.num2}`);
    } else {
      console.log(`Math result ${total}`);
      this.alertCtrl.create({
        title: 'Math result',
        subTitle: `${this.num1} + ${this.num2} = ${total}`,
        buttons: ['OK']
      }).present();
    }
  }

}
