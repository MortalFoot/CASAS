import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FavorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favor',
  templateUrl: 'favor.html',
})
export class FavorPage {

  carrito;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.carrito = this.navParams.get("carrito");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavorPage');
  }

}
