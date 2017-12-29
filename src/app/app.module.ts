import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import 'hammerjs';

import { AppComponent } from './app.component';
import { CuriosityPhotoApiService } from './curiosity-photo-api.service';
import { MaasApiService } from './maas-api.service';
import { MeteoComponent } from './meteo/meteo.component';
import { PhotosComponent } from './photos/photos.component';
import { ApodComponent } from './apod/apod.component';
import { ApodService } from './apod.service';
import { NumbersComponent } from './numbers/numbers.component';

const routing: Routes= [{path: 'meteo', component: MeteoComponent}];
@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    PhotosComponent,
    ApodComponent,
    NumbersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
    JsonpModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(routing)
  ],
  providers: [CuriosityPhotoApiService, MaasApiService, ApodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
