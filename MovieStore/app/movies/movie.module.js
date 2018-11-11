System.register(['@angular/core', '@angular/common', '@angular/forms', './movie-list.component', './movie-detail.component', './movie-filter.pipe', './movies.service', './movie.routing', '../shared/review.component'], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1, movie_list_component_1, movie_detail_component_1, movie_filter_pipe_1, movies_service_1, movie_routing_1, review_component_1;
    var MovieModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (movie_list_component_1_1) {
                movie_list_component_1 = movie_list_component_1_1;
            },
            function (movie_detail_component_1_1) {
                movie_detail_component_1 = movie_detail_component_1_1;
            },
            function (movie_filter_pipe_1_1) {
                movie_filter_pipe_1 = movie_filter_pipe_1_1;
            },
            function (movies_service_1_1) {
                movies_service_1 = movies_service_1_1;
            },
            function (movie_routing_1_1) {
                movie_routing_1 = movie_routing_1_1;
            },
            function (review_component_1_1) {
                review_component_1 = review_component_1_1;
            }],
        execute: function() {
            MovieModule = class MovieModule {
            };
            MovieModule = __decorate([
                core_1.NgModule({
                    imports: [
                        common_1.CommonModule,
                        forms_1.FormsModule,
                        movie_routing_1.movieRouting,
                    ],
                    declarations: [
                        movie_list_component_1.MovieListComponent,
                        movie_detail_component_1.MovieDetailComponent,
                        movie_filter_pipe_1.MovieFilterPipe,
                        review_component_1.ReviewComponent
                    ],
                    providers: [
                        movies_service_1.MovieService
                    ]
                }), 
                __metadata('design:paramtypes', [])
            ], MovieModule);
            exports_1("MovieModule", MovieModule);
        }
    }
});
//# sourceMappingURL=movie.module.js.map