import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from '././services/news-api.service';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
 
  MatListModule,
} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';




// import { MatButtonModule} from '@angular/material/button';
// import {MatCardModule}   from '@angular/material/card';
// import { MatMenuModule} from '@angular/material/menu';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import { MatIconModule} from '@angular/material/icon';
// import {  MatSidenavModule} from '@angular/material/sidenav';
// import {MatListModule} from '@angular/material/list';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
   AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // MatButtonModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
   
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
