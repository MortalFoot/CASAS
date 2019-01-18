import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FavoritosPage } from '../favoritos/favoritos';
import { FavorPage } from '../favor/favor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  fav = FavoritosPage;
  fav2 = FavorPage;
  carrito=[];


  

  constructor(public navCtrl: NavController) {

  }

  FotoCasa = [
    
     { 
       
      id:0,
      
      Nombre: "Casa en Puerta de Hierro",
      foto: "../assets/imgs/Casa1.jpg",
      Precio: "$14,000,000",
      Numero: "(33) 5500 2933",
      Lugar: "Puerta de Hierro",
      Recamaras: "3",
      Banos:"2.5"
  
     },

     { 
       
      id:1,
      
      Nombre: "Cabaña Multi Proposito Empo. (Arandas)",
      foto: "../assets/imgs/Casa2.jpeg",
      Precio: "$730,000",
      Numero: "4774498696",
      Lugar: "Arandas",
      Recamaras: "3",
      Banos:"2.5"
  
     },

     { 
       
      id:2,

      Nombre: "Bosques De La Victoria",
      foto: "../assets/imgs/Casa3.jpg",
      Precio: "$7,800,000",
      Numero: "3313327610",
      Lugar: "Bosques de la Victoria",
      Recamaras: "3",
      Banos:"2.5"
  
     },

     { 
       
      id:3,

      Nombre: "Concepto nuevo en la ciudad, refugio de lujo",
      foto: "../assets/imgs/Casa4.jpg",
      Precio: "$94,999 USD",
      Numero: "3333687475",
      Lugar: "Zapopan",
      Recamaras: "3",
      Banos:"2.5"
  
     },

     { 
       
      id:4,

      Nombre: "Senderos De Monte Verde, CASA NUEVA ",
      foto: "../assets/imgs/Casa5.jpg",
      Precio: "$2,380,000.00",
      Numero: " 32884293",
      Lugar: "Senderos de Monte Verde",
      Recamaras: "4",
      Banos:"2.5"
  
     },

     { 
       
      id:5,

      Nombre: "Bosques De Santa Anita ",
      foto: "../assets/imgs/Casa6.jpeg",
      Precio: "$ 3,300,000.00",
      Numero: " 3315691536",
      Lugar: "Santa Anita",
      Recamaras: "3",
      Banos:"2.5"
  
     },

     { 
       
      id:6,

      Nombre: "Tlaquepaque Colonia: Balcones De Santa Maria",
      foto: "../assets/imgs/Casa7.jpg",
      Precio: "$1,490,000.00",
      Numero: " 3314694114 ",
      Lugar: "Tlaquepaque",
      Recamaras: "3",
      Banos:"2.5"
  
     },

     { 
       
      id:7,

      Nombre: "Tlaquepaque Colonia: Balcones De Santa Maria",
      foto: "../assets/imgs/Casa8.jpg",
      Precio: "$1,490,000.00",
      Numero: " 3314694114 ",
      Lugar: "Tlaquepaque",
      Recamaras: "3",
      Banos:"2"
  
     },

     { 
       
      id:8,

      Nombre: "Tlajomulco Colonia: Balcones De Santa Anita",
      foto: "../assets/imgs/Casa9.jpg",
      Precio: "$ 390,000.00",
      Numero: " 3325436789",
      Lugar: "Tlajomulco",
      Recamaras: "3",
      Banos:"2.5"
  
     },

     { 
       
      id:9,

      Nombre: "ACUEDUCTO/ Naciones Unidas",
      foto: "../assets/imgs/Casa10.jpg",
      Precio: "$ 3,090,000.00",
      Numero: " 38480440",
      Lugar: "Acueducto",
      Recamaras: "4",
      Banos:"2.5"
  
     },


    ];


    clickIMA(u){
     
      this.navCtrl.push(this.fav, {casa: u});

    }

    clickCarrito(){

      this.navCtrl.push(this.fav2, {carrito: this.carrito});

    }

}
