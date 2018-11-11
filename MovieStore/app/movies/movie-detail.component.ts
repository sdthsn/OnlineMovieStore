import { Component } from "@angular/core";
import { IMovie } from "./movie";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { MovieService } from "./movies.service";

@Component({
    templateUrl:'app/movies/movie-detail.component.html'
})
export class MovieDetailComponent {
    pageTitle: string ='Movie Detail!';
    movie:IMovie;
    errorMessage: string;
    private sub: Subscription;

    constructor(private route:ActivatedRoute,
        private router:Router,
        private _movieService:MovieService) {   }
        ngOnInit():void{
            this.sub =this.route.params.subscribe(params=>{
                let id = +params['id']; // '+' is to make id as a number type, if you don't put + infront of param it will take id as string and will result based on string input 
                this.getMovie(id);

            });
        }

        ngOnDestroy(){
            this.sub.unsubscribe();
        }
        getMovie(id:number){
            this._movieService.getMovie(id).subscribe(
                movie=>this.movie=movie,
                error=>this.errorMessage=<any>error);
        }
        onBack():void {
            this.router.navigate(['/movies']);
        }

        onRatingClicked(message:string): void {
            this.pageTitle= 'Movie Detail: ' + message;

        }
}