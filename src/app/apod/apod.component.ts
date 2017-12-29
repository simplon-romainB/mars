import { ApodService } from './../apod.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {

  constructor(public apodService: ApodService) { }
  @Input()affichageApod;
  public explanation:string;
  public image:string;
  @Output() open3: EventEmitter<any> = new EventEmitter();

  renderLastApod(){
    var v = this.apodService.ApodReport().subscribe(v=> console.log(v));
    var t = this.apodService.ApodReport().subscribe(t=> this.explanation = t.explanation);
    var x = this.apodService.ApodReport().subscribe(x=> this.image = x.url);
  }
   close(){
    this.open3.emit(null);
  }

  ngOnInit() {
  }

}
