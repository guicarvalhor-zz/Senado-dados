import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatMenuModule } from "@angular/material/menu";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { MenuComponent } from "../menu/menu.component";
import { Graficos2Component } from "./grafico2.component";
import { GraficosComponent } from "./graficos.component";
import {routes} from "./graficos-routing.module";

const ENTITY_STATES = [...routes];

@NgModule({
    declarations: [
        GraficosComponent,
        Graficos2Component,
        
    ],
    imports: [ 
        BrowserModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        CommonModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    providers: []
  })
  export class GraficosModule { }
  