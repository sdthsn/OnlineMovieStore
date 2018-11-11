import { Component,OnInit} from "@angular/core";
import {IMovie} from  './movie';
import { MovieService } from "./movies.service";

@Component({
    selector:"movies",
    templateUrl:'app/movies/movie-list.component.html',
    styleUrls:['app/movies/movie-list.component.css']
})
export class MovieListComponent implements OnInit {
    pageTitle: string= 'Movie List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    seePoster: boolean= false;
    listFilter: string;
    movies:IMovie[];
    errorMessage: string;
    constructor(private _moviService: MovieService){

    }
    toggleImage() : void {
        this.seePoster=!this.seePoster;

    }
    ngOnInit():void{
       
        this.movies=<any>this._moviService.getMovies()
        .subscribe(movies => this.movies= movies, 
                 error => this.errorMessage = <any>error
                 );
       
    }
    onRatingClicked(message: string) : void {
        this. pageTitle= 'Movie List' + message;
    }
}