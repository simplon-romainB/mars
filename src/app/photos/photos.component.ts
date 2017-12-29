import { CuriosityPhotoApiService } from './../curiosity-photo-api.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  @Output() open2: EventEmitter<any> = new EventEmitter();
  @Input()affichagePhotos;
  @Input()prepID;
  public photo;
  public photo2;
  public selectedValue: string;
  public description:string;
  public cameras = [ /* tableau d'objets qui va servir dans les paramètres pour les requetes Ajax photos */
    {nom:"front hazard camera", dimin: "fhaz", descriptions: "camera avant anti collisions"},
    {nom:"rear hazard camera", dimin: "rhaz", descriptions: "camera arrière anti collisions"},
    {nom:"navigation camera", dimin: "navcam", descriptions: "camera utilisée pour piloter le rover"},
    {nom:"ChemCam", dimin: "chemcam", descriptions: "camera du laboratoire intégré de la sonde"}
    
    
  ]

  constructor(public curiosityPhotoApiService: CuriosityPhotoApiService) { }
  
  renderLastReport(type)	{
	this.curiosityPhotoApiService.type = this.cameras[0].dimin;
  this.curiosityPhotoApiService.preparePhoto();
	var s = this.curiosityPhotoApiService.getLastPhoto(type).subscribe(s=> this.photo = s.photos[0].img_src);
  var t = this.curiosityPhotoApiService.getLastPhoto(type).subscribe(t=> console.log(t));
	console.log(this.photo);
  
	}
renderLastReportRhaz(type,errorL:number,cam){     /* TODO: gerer les érreurs quand une des camera n'a pas pris de photo le dernier jour*/
  this.description = cam
  console.log("errorl" + errorL);
  this.curiosityPhotoApiService.type = type;
  var s = this.curiosityPhotoApiService.getLastPhoto(errorL).subscribe(s => this.photo = s.photos[0].img_src)
                                                                    /*error => this.renderLastReportRhaz(type,(errorL-1))); */                                                             
  var s = this.curiosityPhotoApiService.getLastPhoto(errorL).subscribe(s => console.log(s.photos[0].img_src));
}
close(){
    this.open2.emit(null);
  }


  ngOnInit() {
  }

}
