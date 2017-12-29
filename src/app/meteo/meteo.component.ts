import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MaasApiService } from '../maas-api.service';
import { RouterModule, Routes } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {
@Input()affichage;
public affichage2 = false;
public affichage3 = false;
public temperatureMax;
public temperatureMin;
public value;
public affichageValue:number;
public affichageValue2:number;
public value2;
public value3;
public selectedValue;
public t;
public date;
public retour:boolean = false;
public valueExplic ="temperature maximale enregistrée (sur une echelle de -100 a 0°C)";
public value2Explic = "temperature minimale enregistrée (sur une echelle de -100 a 0°C)";
public value3Explic = "préssion enregistrée, la moyenne est de 610 Pa";
public explicationsMeteos;
 @Output() open: EventEmitter<any> = new EventEmitter();
  constructor (public maasApiService: MaasApiService){}
    renderExplications(valeur) {
      this.explicationsMeteos = valeur;
    }

    renderMeteo() {     /*gestion des spinners et des valeurs récupérés */
     
      var v = this.maasApiService.getLastReport().subscribe(v=> this.value = 100 + parseInt(v.report.max_temp));
      var s = this.maasApiService.getLastReport().subscribe(v=> this.value2 = 100 + parseInt(v.report.min_temp));
      var t = this.maasApiService.getLastReport().subscribe(v=> this.value3 =  parseInt(v.report.pressure)/10);
      var u = this.maasApiService.getLastReport().subscribe(v=> this.date = v.report.terrestrial_date);
      var z = this.maasApiService.getLastReport().subscribe(v=> this.affichageValue = v.report.max_temp);
      var i = this.maasApiService.getLastReport().subscribe(v=> this.affichageValue2 = v.report.min_temp);
    }
    test2(){
      console.log(this.selectedValue);
    }
  ngOnInit() {
   this.affichage2 = true;
  }


  close(){
    this.open.emit(null);
  }

  ngAfterViewInit() {
   
    
  
  }

}
