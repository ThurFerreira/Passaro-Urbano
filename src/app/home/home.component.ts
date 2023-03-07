import { Component } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})

export class HomeComponent {

  public ofertas!:Array<Oferta>

  constructor(public ofertasService:OfertasService){
  }

  ngOnInit(){
    this.ofertasService.getOfertas()
    .then((ofertas:Oferta[]) => { 
      this.ofertas = ofertas 
    })
    .catch((parametro:any) => { 
      console.log(parametro) 
    })
  }
}
