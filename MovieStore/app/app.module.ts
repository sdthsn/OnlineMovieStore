import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import {HttpModule} from '@angular/http';
import 'rxjs/Rx';
import {APP_BASE_HREF} from '@angular/common'; // this module needed for setting routing , angular 6b and up

import {routing} from './app.routing';
import {WelcomeComponent} from './home/welcome.component';
import {MovieModule} from './movies/movie.module';

@NgModule({
    imports: [BrowserModule, FormsModule,HttpModule,routing,MovieModule], //SharedModule
    declarations: [AppComponent, WelcomeComponent], //,MovieFilterPipe,MovieListComponent,MovieDetailComponent,
    bootstrap: [AppComponent],
    providers: [{provide: APP_BASE_HREF, useValue : '/' }]

})

export class AppModule { }
