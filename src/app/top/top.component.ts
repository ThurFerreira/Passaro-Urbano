import { Component } from '@angular/core';
import { OfertasService } from '../ofertas.service';
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
  providers: [OfertasService]
})
export class TopComponent { 
// parei na 194    
  constructor(private ofertasService:OfertasService){}

  public pesquisa(value:string): void{
    
  }
}
