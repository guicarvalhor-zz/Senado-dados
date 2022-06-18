import { Injectable } from "@angular/core";
import * as dados from 'src/app/graficos/dados.json';

@Injectable({providedIn: 'root'})

//classe para ler os dados do JSON
export class GraficosService {
    json = []
    //método estático para leitura dos dados no JSON
    static getJson(){
        let dadosGrafico = (dados as any).default;
        return dadosGrafico;
    } 

    //lista de dados filtrados
    static filtroJson(ano:number){
        let dados = this.getJson()
        let resultado = dados.filter((element: { Ano: number; }) => element.Ano === ano);
        return resultado;
    }
}

