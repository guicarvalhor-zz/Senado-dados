import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { GraficosService } from './grafico.service';

interface DadosGrafico {
  receitasPrevista: Number[];
  receitasArrecadadaLiquida: Number[];
  anos: Number[];
}

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css'],
})

export class GraficosComponent implements OnInit {
  json: any;
  chart: any;
 
  chart3: any;
  anos: any;
  constructor(private graficosservice: GraficosService) {}

  ngOnInit(): void {
    this.chart = document.getElementById('meu_primeiro_grafico');
    
    this.chart3 = document.getElementById('terceiro_grafico');
    Chart.register(...registerables);
    this.loadChart();
    
    this.loadChart3();
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


  //função para criação do gráfico
  loadChart(): void {
    let dadosGrafico = this.pegarDados();
        new Chart(this.chart,{
          type: 'line',
        data: {
            labels: dadosGrafico.anos,
            datasets: [{
              label: 'Receitas Previstas',
              data: dadosGrafico.receitasPrevista,
              backgroundColor: [
                  'rgba(255, 26, 104, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 26, 104, 1)'
              ],
              borderWidth: 1
          },{
              label: 'Receitas Arrecadadas Liquidas',
              data: dadosGrafico.receitasArrecadadaLiquida,
              backgroundColor: [
                  'rgba(65, 105, 255, 0.2)',
              ],
              borderColor: [
                  'rgba(65, 105, 255, 1)',
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
                text: 'Receitas liquidas x Arrecadadas',
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

 
  loadChart3(): void {
    let dadosGrafico3 = this.pegarDados();
        new Chart(this.chart3,{
          type: 'bar',
        data: {
            labels: dadosGrafico3.anos,
            datasets: [{
              label: 'Receitas Arrecadadas Liquidas',
              data: dadosGrafico3.receitasArrecadadaLiquida,
              backgroundColor: [
                'rgba(65, 105, 255, 0.2)',
            ],
            borderColor: [
                'rgba(65, 105, 255, 1)',
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
                text: 'Receitas Arrecadadas Liquidas',
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
