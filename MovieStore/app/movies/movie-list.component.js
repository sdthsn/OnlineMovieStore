System.register(["@angular/core", "./movies.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, movies_service_1;
    var MovieListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (movies_service_1_1) {
                movies_service_1 = movies_service_1_1;
            }],
        execute: function() {
            MovieListComponent = class MovieListComponent {
                constructor(_moviService) {
                    this._moviService = _moviService;
                    this.pageTitle = 'Movie List';
                    this.imageWidth = 50;
                    this.imageMargin = 2;
                    this.seePoster = false;
                }
                toggleImage() {
                    this.seePoster = !this.seePoster;
                }
                ngOnInit() {
                    this.movies = this._moviService.getMovies()
                        .subscribe(movies => this.movies = movies, error => this.errorMessage = error);
                }
                onRatingClicked(message) {
                    this.pageTitle = 'Movie List' + message;
                }
            };
            MovieListComponent = __decorate([
                core_1.Component({
                    selector: "movies",
                    templateUrl: 'app/movies/movie-list.component.html',
                    styleUrls: ['app/movies/movie-list.component.css']
                }), 
                __metadata('design:paramtypes', [movies_service_1.MovieService])
            ], MovieListComponent);
            exports_1("MovieListComponent", MovieListComponent);
        }
    }
});
//# sourceMappingURL=movie-list.component.js.map