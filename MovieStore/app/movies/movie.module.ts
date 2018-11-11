import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {SharedModule} from '../shared/shared.module';
import { MovieListComponent } from './movie-list.component';
import { MovieDetailComponent } from './movie-detail.component';

import { MovieFilterPipe } from './movie-filter.pipe';
import { MovieService } from './movies.service';
import { movieRouting } from './movie.routing';

import {ReviewComponent} from '../shared/review.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        movieRouting,
       // SharedModule
    ],
    declarations: [
        MovieListComponent,
        MovieDetailComponent,
        MovieFilterPipe,
        ReviewComponent
    ],
    providers: [
        MovieService
    ]
})
export class MovieModule { }