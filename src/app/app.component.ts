import { NumbersComponent } from './numbers/numbers.component';
import { ApodComponent } from './apod/apod.component';
import { RouterModule, Routes } from '@angular/router';

import { PhotosComponent } from './photos/photos.component';
import { Component, ViewChild, OnInit } from '@angular/core';
import {  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule } from '@angular/material';
import { MaasApiService } from './maas-api.service';
import { CuriosityPhotoApiService } from './curiosity-photo-api.service';
import { MeteoComponent } from './meteo/meteo.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})


export class AppComponent {
	@ViewChild(MeteoComponent) meteoComponent: MeteoComponent;  /*les viewchild pour utiliser les fonctions des élements enfants*/
	@ViewChild(PhotosComponent) photosComponent: PhotosComponent
	@ViewChild(ApodComponent) apodComponent: ApodComponent;
	@ViewChild(NumbersComponent) numbersComponent: NumbersComponent;
	public affichageNumbers = false;
	public affichageApod = false
	public affichage = false;
	public isSlide = false;
	public report = {"Max":'', "Min":'' }
	public photo;
	public affichagePhotos = false;
	constructor (public maasApiService: MaasApiService, public curiosityPhotoApiService: CuriosityPhotoApiService){}


renderLastReport(type)	{
	var v = this.maasApiService.getLastReport().subscribe(v=> console.log(v));
	var s = this.curiosityPhotoApiService.getLastPhoto(type).subscribe(s=> this.photo = s.photos[0].img_src);
	console.log(this.photo);
	}
  
SlideFXmeteo(){
	this.meteoComponent.renderMeteo();  /*les slidefonctions qui gerent les animations de slice pour acceder aux enfants et initialisent les appels Ajax */
	this.isSlide = true;
	this.affichage = true;
	
	console.log(this.isSlide);
}
SlideFXmeteoIn(){
	this.isSlide = false;
	this.affichage = false;
	this.affichagePhotos = false;
	this.affichageApod = false;
	this.affichageNumbers = false;
}

SlideFXphotos(type){
	this.curiosityPhotoApiService.type = 'fhaz';
	
	this.photosComponent.renderLastReportRhaz('fhaz',this.curiosityPhotoApiService.preparePhotoID,this.photosComponent.cameras[0].descriptions);
	this.isSlide = true;
	this.affichagePhotos = true;
	
}
SlideFXApod(){
	this.apodComponent.renderLastApod();
	this.isSlide = true;
	this.affichageApod = true;
}
SlideFXNumbers(){
	this.affichageNumbers = true;
	this.isSlide = true;
	
}


ngOnInit(){
	this.apodComponent.renderLastApod();    
	var v = this.curiosityPhotoApiService.preparePhoto().subscribe(v=> this.curiosityPhotoApiService.preparePhotoID=v.photos[0].rover.max_sol);
	
	
}
	
	}

