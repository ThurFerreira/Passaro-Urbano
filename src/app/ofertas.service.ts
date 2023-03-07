import { Oferta } from "./shared/oferta.model"
import {HttpClient} from '@angular/common/http'
import { Injectable } from "@angular/core"
import { firstValueFrom } from "rxjs"

@Injectable()
export class OfertasService {

    constructor(private http:HttpClient){}

    public getOfertas():Promise<Oferta[]> {
        //efetuar requisição e retornar promise com array de ofertas
        return firstValueFrom(this.http.get('http://localhost:3000/ofertas?destaque=true')).then()//nao é feito nada pois o resultante já é o json que era necessário

    }

}