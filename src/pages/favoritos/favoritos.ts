import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
 

  Foto="";
  Lugar="";
  Recamaras ="";
  Banos = "";
  Numero="";
  FAV = [];
  casa={};
  casas;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.casa = this.navParams.get("casa");
    

    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }

  clickFAV(){

    this.FAV.push(this.casas);
    this.navCtrl.pop();

    


  }

}
