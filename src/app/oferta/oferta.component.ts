import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit{

  public oferta!:Oferta
  private route!:ActivatedRoute
  private ofertasService!:OfertasService

  constructor(route:ActivatedRoute, ofertasService:OfertasService){
    this.route = route
    this.ofertasService = ofertasService
  }

  ngOnInit(): void {
    this.ofertasService.getOfertasPorId(this.route.snapshot.params['id'])
    .then((oferta:Oferta) => {
      this.oferta = oferta
    })
  }



}
 