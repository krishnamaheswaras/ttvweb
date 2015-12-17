//defining techvolksApp controllers
var techvolksControllers = angular.module('techvolksControllers', []);

//defining techvolks services
var techvolksServices  = angular.module('techvolksServices', []);

//defining techvolks directives
var techvolksDirectives  = angular.module('techvolksDirectives', []);

/**
 * Declaring the application
 */
var app = angular.module('techvolksApp',['ngMaterial','ui.router','techvolksControllers','techvolksServices','techvolksDirectives']);

/**
 * Application config
 * @params $stateProvider,$$mdThemingProvider
 */
 app.config(function($mdThemingProvider,$stateProvider, $urlRouterProvider) {

 	//configuring the material color plates
 	$mdThemingProvider.theme('default')
    .primaryPalette('cyan')
    .accentPalette('lime');

    //configuring the routes
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home',{
    	url:'/home',
    	templateUrl:'../templates/partials/home.html',
    	controller:'homeController'
    });
 });


