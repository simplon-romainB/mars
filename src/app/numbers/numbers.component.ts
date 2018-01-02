import { Component, AfterViewInit, Input, ViewChild, EventEmitter, Output, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements AfterViewInit {

  @ViewChild("myCanvas") myCanvas;
  @ViewChild("myCanvas2") myCanvas2;
    @ViewChild("myCanvas3") myCanvas3;
  @ViewChild("myCanvas4") myCanvas4;
    @ViewChild("myCanvas5") myCanvas5;
  @ViewChild("myCanvas6") myCanvas6;
  @Output() open: EventEmitter<any> = new EventEmitter();
@Input()affichageNumbers;
 @Output() open4: EventEmitter<any> = new EventEmitter();
public canWidth:number;
public canHeight:number;
public ctx;
public ctx2;
public ctx3;
public ctx4;
public ctx5;
public ctx6;
public explic:string = "Cliquez sur les diagrammes afin d'obtenir quelques détails sur les huit planètes du système solaire (Pluton n'étant plus une planète depuis 2006)"
public zoomId:boolean = false;
public zoomId2:boolean = false;
public zoomId3:boolean = false;
public zoomId4:boolean = false;
public zoomId5:boolean = false;
public affExplic:boolean = false;
public res = 0;
public resPeriode = 0;
public resMasse = 0;
public resDemiGrand = 0;
public resExcent = 0;
public resInclin = 0;
public resVar = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
public couleurs = ['black', 'red', 'yellow', 'pink', 'blue', 'black', 'brown', 'orange', 'violet'];
public valeurA = 78;
public depart = 0;
public fin = 8;
public cadreSup = 0;
public cadreDroit = 0;
public cadreBase:number;
public cadreGauchiste:number;
public planetes = [{"nom": "Jupiter", "taille":100, "masse":100, "demiGrandAxe" :17.3, "periode":7.27, "excentricite": 20, "tailleA":142, "masseA":"2*10", "exposantMasse":27,"demiGrandAxeA":5.2,"periodeA":4380,"excentriciteA":0.048},
                  {"nom": "Saturne", "taille":84.3, "masse":29.9, "demiGrandAxe" : 31.6, "periode":18, "excentricite":25,"tailleA":121, "masseA":"6*10", "exposantMasse":26,"demiGrandAxeA":9.5,"periodeA":10585,"excentriciteA":0.056},
                  {"nom": "Uranus", "taille":35.8 , "masse":4.6, "demiGrandAxe": 64, "periode":51, "excentricite":25,"tailleA":51, "masseA":"9*10", "exposantMasse":25,"demiGrandAxeA":19.2,"periodeA":30660,"excentriciteA":0.046},
                  {"nom": "Neptune", "taille":34.6, "masse":5.55, "demiGrandAxe": 100, "periode":100, "excentricite":4,"tailleA":50, "masseA":"1*10", "exposantMasse":26,"demiGrandAxeA":30,"periodeA":60225,"excentriciteA":0.010},
                  {"nom": "Mars", "taille":4.7, "masse": 0.03, "demiGrandAxe": 5, "periode":1.2, "excentricite":45,"tailleA":7, "masseA":"6.4*10", "exposantMasse":23,"demiGrandAxeA":1.5,"periodeA":687,"excentriciteA":0.093},
                  {"nom": "Terre", "taille":8.9, "masse": 0.3, "demiGrandAxe": 3.3, "periode":0.6, "excentricite":10,"tailleA":13, "masseA":"6*10", "exposantMasse":24,"demiGrandAxeA":1,"periodeA":365,"excentriciteA":0.017},
                  {"nom": "Mercure", "taille":3.4, "masse":0.02, "demiGrandAxe": 1.3, "periode":0.1, "excentricite":100,"tailleA":5, "masseA":"3.3*10", "exposantMasse":23,"demiGrandAxeA":0.4,"periodeA":88,"excentriciteA":0.206},
                  {"nom": "Venus", "taille":8.5, "masse": 0.3, "demiGrandAxe": 2.3, "periode":0.3, "excentricite":3,"tailleA":12, "masseA":"5.9*10", "exposantMasse":24,"demiGrandAxeA":0.7,"periodeA":225,"excentriciteA":0.007}];
                  
  constructor(private renderer : Renderer2) { }

  excentricExemple() {
    this.ctx6 = this.myCanvas6.nativeElement.getContext("2d");
    this.ctx6.arc(50,50,50,0,2*Math.PI);
    this.ctx6.stroke();
  }
  
  close(){
    this.open4.emit(null);
  }
  cadre(){          /* TODO: trouver une solution plus élégante pour déssiner les cadres Canvas */
    this.canWidth = this.myCanvas.nativeElement.offsetWidth;
    this.canHeight = this.myCanvas.nativeElement.offsetHeight;
    this.cadreBase= this.canWidth;
    this.cadreGauchiste= this.canHeight;
    this.ctx = this.myCanvas.nativeElement.getContext("2d");
    this.ctx2 = this.myCanvas2.nativeElement.getContext("2d");
     this.ctx3 = this.myCanvas3.nativeElement.getContext("2d");
    this.ctx4 = this.myCanvas4.nativeElement.getContext("2d");
    this.ctx5 = this.myCanvas5.nativeElement.getContext("2d");
    this.ctx.beginPath();
    this.ctx2.beginPath();
       this.ctx3.beginPath();
    this.ctx4.beginPath();
       this.ctx5.beginPath();
    this.ctx.moveTo(0,1);
     this.ctx2.moveTo(0,1);
        this.ctx3.moveTo(0,1);
     this.ctx4.moveTo(0,1);
        this.ctx5.moveTo(0,1);
    this.ctx.strokeStyle= "black";
    this.ctx2.strokeStyle= "black";
    this.ctx3.strokeStyle= "black";
    this.ctx4.strokeStyle= "black";
    this.ctx5.strokeStyle= "black";
    this.ctx.lineTo(this.cadreSup,1);
     this.ctx2.lineTo(this.cadreSup,1);
      this.ctx3.lineTo(this.cadreSup,1);
     this.ctx4.lineTo(this.cadreSup,1);
      this.ctx5.lineTo(this.cadreSup,1);
    this.ctx.stroke();
    this.ctx2.stroke();
     this.ctx3.stroke();
    this.ctx4.stroke();
     this.ctx5.stroke();
    this.cadreSup = this.cadreSup + 3;
    if (this.cadreSup < this.canWidth){
      var l = setTimeout(()=>this.cadre(),0.5);
      
    }
    else {
      this.cadreDroite();
      
     
    }
  }
  cadreDroite(){
    this.ctx = this.myCanvas.nativeElement.getContext("2d");
    this.ctx2 = this.myCanvas2.nativeElement.getContext("2d");
    this.ctx3 = this.myCanvas3.nativeElement.getContext("2d");
    this.ctx4 = this.myCanvas4.nativeElement.getContext("2d");
    this.ctx5 = this.myCanvas5.nativeElement.getContext("2d");
    this.ctx.beginPath();
    this.ctx2.beginPath();
      this.ctx3.beginPath();
    this.ctx4.beginPath();
      this.ctx5.beginPath();
    this.ctx.moveTo((this.canWidth),1);
    this.ctx2.moveTo((this.canWidth),1);
      this.ctx3.moveTo((this.canWidth),1);
    this.ctx4.moveTo((this.canWidth),1);
      this.ctx5.moveTo((this.canWidth),1);
    this.ctx.strokeStyle= "black";
    this.ctx2.strokeStyle= "black";
    this.ctx3.strokeStyle= "black";
    this.ctx4.strokeStyle= "black";
    this.ctx5.strokeStyle= "black";
    this.ctx.lineTo((this.canWidth),this.cadreDroit);
     this.ctx2.lineTo((this.canWidth),this.cadreDroit);
      this.ctx3.lineTo((this.canWidth),this.cadreDroit);
     this.ctx4.lineTo((this.canWidth),this.cadreDroit);
      this.ctx5.lineTo((this.canWidth),this.cadreDroit);
      this.ctx.stroke();
      this.ctx2.stroke();
       this.ctx3.stroke();
      this.ctx4.stroke();
       this.ctx5.stroke();
      this.cadreDroit = this.cadreDroit + 3 ;
      
    if (this.cadreDroit < this.canHeight){
      var j = setTimeout(()=>this.cadreDroite(),0.5);
    }
    else {
      this.cadreBas();
    }
  }
  cadreBas(){
    this.ctx = this.myCanvas.nativeElement.getContext("2d");
    this.ctx2 = this.myCanvas2.nativeElement.getContext("2d");
     this.ctx3 = this.myCanvas3.nativeElement.getContext("2d");
    this.ctx4 = this.myCanvas4.nativeElement.getContext("2d");
     this.ctx5 = this.myCanvas5.nativeElement.getContext("2d");
    this.ctx.beginPath();
    this.ctx2.beginPath();
    this.ctx3.beginPath();
    this.ctx4.beginPath();
    this.ctx5.beginPath();
    this.ctx.moveTo((this.canWidth-1),(this.canHeight));
    this.ctx2.moveTo((this.canWidth-1),(this.canHeight));
    this.ctx3.moveTo((this.canWidth-1),(this.canHeight));
    this.ctx4.moveTo((this.canWidth-1),(this.canHeight));
    this.ctx5.moveTo((this.canWidth-1),(this.canHeight));
    this.ctx.strokeStyle= "black";
    this.ctx2.strokeStyle= "black";
    this.ctx3.strokeStyle= "black";
    this.ctx4.strokeStyle= "black";
    this.ctx5.strokeStyle= "black";
    this.ctx.lineTo(this.cadreBase,(this.canHeight));
    this.ctx2.lineTo(this.cadreBase,(this.canHeight));
     this.ctx3.lineTo(this.cadreBase,(this.canHeight));
    this.ctx4.lineTo(this.cadreBase,(this.canHeight));
     this.ctx5.lineTo(this.cadreBase,(this.canHeight));
    this.ctx.stroke();
    this.ctx2.stroke();
     this.ctx3.stroke();
    this.ctx4.stroke();
     this.ctx5.stroke();
      this.cadreBase = this.cadreBase - 3 ; 
     
     if (this.cadreBase >= 1){
      var a = setTimeout(()=>this.cadreBas(),0.5);
    } 
   
    else {
      this.cadreGauche();
    }
  }
  cadreGauche(){
     this.ctx = this.myCanvas.nativeElement.getContext("2d");
     this.ctx2 = this.myCanvas2.nativeElement.getContext("2d");
      this.ctx3 = this.myCanvas3.nativeElement.getContext("2d");
     this.ctx4 = this.myCanvas4.nativeElement.getContext("2d");
      this.ctx5 = this.myCanvas5.nativeElement.getContext("2d");
    this.ctx.beginPath();
    this.ctx2.beginPath();
     this.ctx3.beginPath();
    this.ctx4.beginPath();
     this.ctx5.beginPath();
    this.ctx.moveTo(1,this.canHeight);
    this.ctx2.moveTo(1,this.canHeight);
     this.ctx3.moveTo(1,this.canHeight);
    this.ctx4.moveTo(1,this.canHeight);
     this.ctx5.moveTo(1,this.canHeight);
     this.ctx.strokeStyle= "black";
     this.ctx2.strokeStyle= "black";
        this.ctx3.strokeStyle= "black";
     this.ctx4.strokeStyle= "black";
        this.ctx5.strokeStyle= "black";
     this.ctx.lineTo(1,this.cadreGauchiste);
     this.ctx2.lineTo(1,this.cadreGauchiste);
     this.ctx3.lineTo(1,this.cadreGauchiste);
     this.ctx4.lineTo(1,this.cadreGauchiste);
     this.ctx5.lineTo(1,this.cadreGauchiste);
    this.ctx.stroke();
    this.ctx2.stroke();
      this.ctx3.stroke();
    this.ctx4.stroke();
      this.ctx5.stroke();
    this.cadreGauchiste = this.cadreGauchiste - 3 ;
    if  (this.cadreGauchiste >= 1) {
      var l = setTimeout(()=>this.cadreGauche(),0.5);
    }
    else {
     
      this.init(this.planetes[0].taille,this.resVar[0],"black","grey");
      
     
      
    

    
      
    }
  }
  /* série de fonctions pour gérer les graphs. TODO: trouver une solution pour les élements qui font moins d'un pixel */
  init(taille,variableReset,couleurContour,couleurFill ){
    
    this.ctx = this.myCanvas.nativeElement.getContext("2d");
    this.ctx.beginPath();
    
    this.ctx.strokeStyle= couleurContour;
    this.ctx.fillStyle=couleurFill;
    
    this.ctx.strokeRect(1,(this.canHeight-(variableReset)),(this.canWidth/8),variableReset);
     this.ctx.fillRect(1,(this.canHeight-(variableReset)),(this.canWidth/8),variableReset);
    
    this.ctx.closePath();
    variableReset = variableReset +1;
    
    if (variableReset < ((taille/100)*(this.canHeight)-1)) {
    var x = setTimeout(()=>this.init(taille,variableReset,couleurContour,couleurFill ),1);
  }
  else {
    this.res = 1;
     this.init2(this.planetes[1].taille,this.resVar[this.res],"black",this.couleurs[this.res],((this.canWidth/8)*this.res));
  }
  }
   init2(taille,variableReset,couleurContour,couleurFill,length) {
    this.ctx = this.myCanvas.nativeElement.getContext("2d");
    
    this.ctx.beginPath();
    this.ctx.strokeStyle= "black";
    this.ctx.fillStyle= couleurFill;
    this.ctx.strokeRect(1+length,(this.canHeight-(variableReset)),(this.canWidth/8),variableReset);
    this.ctx.fillRect(1+length,(this.canHeight-variableReset),(this.canWidth/8),variableReset);
    
    this.ctx.closePath();
    variableReset = variableReset+1;
    console.log(this.res);
    if (variableReset < ((taille/100)*(this.canHeight))) {
    var z = setTimeout(()=>this.init2(taille,variableReset,couleurContour,couleurFill,length),1);
   
  }
  
    else {
      this.res = this.res +1;
      if (this.res>7){
        this.initMasse(this.planetes[0].masse,this.resVar[this.resMasse+8],"black",this.couleurs[this.resMasse] )
      }
      else {
    
    this.init2(this.planetes[this.res].taille,this.resVar[this.res],"black",this.couleurs[this.res],((this.canWidth/8)*this.res));

    }
  }
   }
   

  initMasse(masse,variableReset,couleurContour,couleurFill){
     
      this.ctx2 = this.myCanvas2.nativeElement.getContext("2d");
    this.ctx2.beginPath();
    
    this.ctx2.strokeStyle= "black";
    this.ctx2.fillStyle=couleurFill;
    
    this.ctx2.strokeRect(1,(this.canHeight-(variableReset)),(this.canWidth/8),variableReset);
     this.ctx2.fillRect(1,(this.canHeight-(variableReset)),(this.canWidth/8),variableReset);
   
    this.ctx2.closePath();
    variableReset = variableReset+1;
    
    if (variableReset < ((masse/100)*(this.canHeight)-1)) {
    var xx = setTimeout(()=>this.initMasse(masse,variableReset,"black","grey"),1);
  }
  else {
    this.resMasse = this.resMasse +1;
    this.initMasse2(this.planetes[this.resMasse].masse,this.resVar[this.resMasse+8],"black",this.couleurs[this.resMasse],((this.canWidth/8)*this.resMasse));
  }
 
   }
   initMasse2(taille,variableReset,couleurContour,couleurFill,length){
     this.ctx2 = this.myCanvas2.nativeElement.getContext("2d");
    
    this.ctx2.beginPath();
    this.ctx2.strokeStyle= couleurContour;
    this.ctx2.fillStyle= couleurFill;
    this.ctx2.strokeRect(1+length,(this.canHeight-variableReset),(this.canWidth/8),variableReset);
    this.ctx2.fillRect(1+length,(this.canHeight-variableReset),(this.canWidth/8),variableReset);
    
    this.ctx2.closePath();
    variableReset = variableReset+1;
    console.log(this.planetes[this.resMasse].masse);
    if (variableReset < ((taille/100)*(this.canHeight))) {
    var zx = setTimeout(()=>this.initMasse2(taille,variableReset,couleurContour,couleurFill,length),1);
   
  }
  
  else {
    console.log(this.resMasse);
    this.resMasse = this.resMasse +1;
    if (this.resMasse > 7){
      this.initDemi(this.planetes[0].demiGrandAxe,this.resVar[this.resDemiGrand+8],"black",this.couleurs[this.resDemiGrand])
    }
    else {
    this.initMasse2(this.planetes[this.resMasse].masse,this.resVar[this.resMasse+8],"black",this.couleurs[this.resMasse],((this.canWidth/8)*this.resMasse));
  }
  }
   }

   initDemi(dist,variableReset,couleurContour,couleurFill){
     
      this.ctx3 = this.myCanvas3.nativeElement.getContext("2d");
    this.ctx3.beginPath();
    
    this.ctx3.strokeStyle= "black";
    this.ctx3.fillStyle=couleurFill;
    
    this.ctx3.strokeRect(1,(this.canHeight-(variableReset)),(this.canWidth/8),variableReset);
     this.ctx3.fillRect(1,(this.canHeight-(variableReset)),(this.canWidth/8),variableReset);
   
    this.ctx3.closePath();
    variableReset = variableReset+1;
    
    if (variableReset < ((dist/100)*(this.canHeight)-1)) {
    var xx = setTimeout(()=>this.initDemi(dist,variableReset,"black","grey"),1);
  }
  else {
    this.resDemiGrand = this.resDemiGrand +1;
    this.initDemi2(this.planetes[this.resDemiGrand].demiGrandAxe,this.resVar[this.resDemiGrand+16],"black",this.couleurs[this.resDemiGrand],((this.canWidth/8)*this.resDemiGrand));
  }
   }

   initDemi2(dist,variableReset,couleurContour,couleurFill,length){
     
      this.ctx3 = this.myCanvas3.nativeElement.getContext("2d");
    this.ctx3.beginPath();
    
    this.ctx3.strokeStyle= "black";
    this.ctx3.fillStyle=couleurFill;
    
    this.ctx3.strokeRect(1+length,(this.canHeight-(variableReset)),(this.canWidth/8),variableReset);
     this.ctx3.fillRect(1+length,(this.canHeight-(variableReset)),(this.canWidth/8),variableReset);
   
    this.ctx3.closePath();
    variableReset = variableReset+1;
    
    if (variableReset < ((dist/100)*(this.canHeight)-1)) {
    var zx = setTimeout(()=>this.initDemi2(dist,variableReset,couleurContour,couleurFill,length),1);
  }
  else {
    this.resDemiGrand = this.resDemiGrand +1;
    if (this.resDemiGrand > 7){
      this.initperiode(this.planetes[0].periode,this.resVar[this.resPeriode+8],"black",this.couleurs[this.resPeriode])
    }
    else {
    this.initDemi2(this.planetes[this.resDemiGrand].demiGrandAxe,this.resVar[this.resDemiGrand+8],"black",this.couleurs[this.resDemiGrand],((this.canWidth/8)*this.resDemiGrand));
    }
  }
   }

    initperiode(periode,variableReset,couleurContour,couleurFill){
     
      this.ctx4 = this.myCanvas4.nativeElement.getContext("2d");
    this.ctx4.beginPath();
    
    this.ctx4.strokeStyle= "black";
    this.ctx4.fillStyle=couleurFill;
    
    this.ctx4.strokeRect(1,(this.canHeight-(variableReset)),(this.canWidth/8),variableReset);
     this.ctx4.fillRect(1,(this.canHeight-(variableReset)),(this.canWidth/8),variableReset);
   
    this.ctx4.closePath();
    variableReset = variableReset+1;
    
    if (variableReset < ((periode/100)*(this.canHeight)-1)) {
    var xx = setTimeout(()=>this.initperiode(periode,variableReset,"black","grey"),1);
  }
  else {
    this.resPeriode = this.resPeriode+1;
    this.initperiode2(this.planetes[this.resPeriode].periode,this.resVar[this.resPeriode+24],"black",this.couleurs[this.resPeriode],((this.canWidth/8)*this.resPeriode));
  }
   }
   initperiode2(periode,variableReset,couleurContour,couleurFill,length){
     
      this.ctx4 = this.myCanvas4.nativeElement.getContext("2d");
    this.ctx4.beginPath();
    
    this.ctx4.strokeStyle= "black";
    this.ctx4.fillStyle=couleurFill;
    
    this.ctx4.strokeRect(1+length,(this.canHeight-(variableReset)),(this.canWidth/8),variableReset);
     this.ctx4.fillRect(1+length,(this.canHeight-(variableReset)),(this.canWidth/8),variableReset);
   
    this.ctx4.closePath();
    variableReset = variableReset+1;
    
    if (variableReset < ((periode/100)*(this.canHeight)-1)) {
    var zx = setTimeout(()=>this.initperiode2(periode,variableReset,couleurContour,couleurFill,length),1);
  }
  else {
    this.resPeriode = this.resPeriode+1;
    if (this.resPeriode > 7){
      this.initexcent(this.planetes[0].excentricite,this.resVar[this.resExcent+32],"black",this.couleurs[this.resExcent])
    
      
    }
    else {
    this.initperiode2(this.planetes[this.resPeriode].periode,this.resVar[this.resPeriode+24],"black",this.couleurs[this.resPeriode],((this.canWidth/8)*this.resPeriode));
    }
  }
   }

   initexcent(excent,variableReset,couleurContour,couleurFill){
     
      this.ctx5 = this.myCanvas5.nativeElement.getContext("2d");
    this.ctx5.beginPath();
    
    this.ctx5.strokeStyle= "black";
    this.ctx5.fillStyle=couleurFill;
    
    this.ctx5.strokeRect(1,(this.canHeight-(variableReset)),(this.canWidth/8),variableReset);
     this.ctx5.fillRect(1,(this.canHeight-(variableReset)),(this.canWidth/8),variableReset);
   
    this.ctx5.closePath();
    variableReset = variableReset+1;
    
    if (variableReset < ((excent/100)*(this.canHeight)-1)) {
    var xx = setTimeout(()=>this.initexcent(excent,variableReset,"black","grey"),1);
  }
  else {
    this.resExcent = this.resExcent+1;
    this.initexcent2(this.planetes[this.resExcent].periode,this.resVar[this.resExcent+32],"black",this.couleurs[this.resExcent],((this.canWidth/8)*this.resExcent));
  }
   }

   initexcent2(excent,variableReset,couleurContour,couleurFill,length){
     
      this.ctx5 = this.myCanvas5.nativeElement.getContext("2d");
    this.ctx5.beginPath();
    
    this.ctx5.strokeStyle= "black";
    this.ctx5.fillStyle=couleurFill;
    
    this.ctx5.strokeRect(1+length,(this.canHeight-(variableReset)),(this.canWidth/8),variableReset);
     this.ctx5.fillRect(1+length,(this.canHeight-(variableReset)),(this.canWidth/8),variableReset);
   
    this.ctx5.closePath();
    variableReset = variableReset+1;
    
    if (variableReset < ((excent/100)*(this.canHeight)-1)) {
    var zx = setTimeout(()=>this.initexcent2(excent,variableReset,couleurContour,couleurFill,length),1);
  }
  else {
    this.resExcent = this.resExcent+1;
    if (this.resExcent > 7){
      
    }
    else {
    this.initexcent2(this.planetes[this.resExcent].excentricite,this.resVar[this.resExcent+32],"black",this.couleurs[this.resExcent],((this.canWidth/8)*this.resExcent));
    }
  }
   }
   

  
   /* gestion des evenements quand on click sur les graphs */
   zoom(){
    this.zoomId = !this.zoomId;
    this.zoomId2 = false;
    this.zoomId3 = false;
    this.zoomId4 = false;
    this.zoomId5 = false;
    
    this.affExplic = true;
    this.explic = "taille"
   }
   zoom2(){
    this.zoomId2 = !this.zoomId2;
      this.zoomId = false;
    this.zoomId3 = false;
    this.zoomId4 = false;
    this.zoomId5 = false;
   
    this.affExplic = true;
    this.explic = "masse"
   }
   zoom3(){
    this.zoomId3 = !this.zoomId3;
      this.zoomId2 = false;
    this.zoomId = false;
    this.zoomId4 = false;
    this.zoomId5 = false;
 
    this.affExplic = true;
    this.explic = "demi grand axe";
   }
   zoom4(){
    this.zoomId4 = !this.zoomId4;
      this.zoomId2 = false;
    this.zoomId3 = false;
    this.zoomId = false;
    this.zoomId5 = false;
 
    this.affExplic = true;
    this.explic = "autre";
   }
   zoom5(){
    this.zoomId5 = !this.zoomId5;
      this.zoomId2 = false;
    this.zoomId3 = false;
    this.zoomId4 = false;
    this.zoomId = false;

    this.affExplic = true;
    this.explic= "autre stat";
   }
 
  
  
  ngAfterViewInit() {
   
  }

}
