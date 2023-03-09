import { Oferta } from "./shared/oferta.model"
import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core"
import { firstValueFrom, Observable } from "rxjs"

import { map } from 'rxjs';
import { DEFAULT_API_URL } from "./app.api"

@Injectable()
export class OfertasService {

    constructor(private http:HttpClient){ }


    getOfertasPorId(id:number): Promise<Oferta>{

        return firstValueFrom(this.http.get(`${DEFAULT_API_URL}?id=${id}`))
        .then((resposta:any) => {return resposta.shift()})

        //firstValueFrom(this.http.get(`http://localhost:3000/ofertas?id=${id}`))
        //.then((resposta:any) => resposta.shift())
    }


    public getOfertas():Promise<Oferta[]> {
        //efetuar requisição e retornar promise com array de ofertas
        return firstValueFrom(this.http.get(`${DEFAULT_API_URL}?destaque=true`)).then()//nao é feito nada pois o resultante já é o json que era necessário

    }

    public getOfertasPorCategoria(categoria:string): Promise<Oferta[]>{
        return firstValueFrom(this.http.get(`${DEFAULT_API_URL}?categoria=${categoria}`)).then()
    }

    public pesquisaOfertas(termo:string): Observable<Oferta[]>{
        return this.http.get(`${DEFAULT_API_URL}?descricao_oferta=${termo}`).pipe(map((resposta:any) => resposta.json()))
    }

}