System.register(['@angular/router', './movie-list.component', './movie-detail.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, movie_list_component_1, movie_detail_component_1;
    var movieRoutes, movieRouting;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (movie_list_component_1_1) {
                movie_list_component_1 = movie_list_component_1_1;
            },
            function (movie_detail_component_1_1) {
                movie_detail_component_1 = movie_detail_component_1_1;
            }],
        execute: function() {
            exports_1("movieRoutes", movieRoutes = [
                { path: 'movies', component: movie_list_component_1.MovieListComponent },
                { path: 'movie/:id', component: movie_detail_component_1.MovieDetailComponent }
            ]);
            exports_1("movieRouting", movieRouting = router_1.RouterModule.forChild(movieRoutes));
        }
    }
});
//# sourceMappingURL=movie.routing.js.map