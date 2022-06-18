import { Component, OnInit } from "@angular/core";
import { Chart, registerables } from "chart.js";
import { GraficosService } from "./grafico.service";

interface DadosGrafico {
    receitasPrevista: Number[];
    receitasArrecadadaLiquida: Number[];
    anos: Number[];
}

@Component({
    selector: 'app-graficos2',
    templateUrl: './grafico2.component.html',
    styleUrls: ['./graficos.component.css'],
  })
  
  export class Graficos2Component implements OnInit {
    json: any;
    chart2: any;
    constructor() {}

    ngOnInit(): void {
        this.chart2 = document.getElementById('segundo_grafico');
        Chart.register(...registerables);
        this.loadChart2();
    }
    pegarDados(): DadosGrafico {
    
        //chamando a função construtora 
        this.json = GraficosService.getJson();
    
        //criando as arrays para receber os valores
        let resultReceitaPrevista: number[] = [];
        let resultReceitaArrecadadaLiquida: number[] = [];
        let anos: number[] = [];
      
        //loop para busca dos dados dentro do JSON 
        this.json.receitas.forEach(function (element: any) {
          resultReceitaPrevista.push(parseInt(element.receitaprevista));
          resultReceitaArrecadadaLiquida.push(parseInt(element.receitaarrecadadaliquida));
          anos.push(element.Ano);
        });
    
        //retorno dos dados para os arrays
        return {
          receitasPrevista: resultReceitaPrevista,
          receitasArrecadadaLiquida: resultReceitaArrecadadaLiquida,
          anos: anos,
        };
      }
    loadChart2(): void {
        let dadosGrafico2 = this.pegarDados();
            new Chart(this.chart2,{
              type: 'bar',
            data: {
                labels: dadosGrafico2.anos,
                datasets: [{
                  label: 'Receitas Previstas',
                  data: dadosGrafico2.receitasPrevista,
                  backgroundColor: [
                      'rgba(255, 26, 104, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 26, 104, 1)'
                  ],
                  borderWidth: 1
              }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                  title: {
                    display: true,
                    text: 'Receitas Previstas',
                    fullSize: true,
                    align: 'start',
                    padding: {
                      top: 10,
                      bottom: 30
                  }
                  }
                }
            }
        });
        
      }

  }