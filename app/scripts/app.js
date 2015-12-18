//defining controllers
var techvolksControllers = angular.module('techvolksControllers',[]);

//defining techvolksServices
var techvolksServices = angular.module('techvolksServices',[]);

/**
 * Declaring the application
 */
var app = angular.module('techvolksApp',['ngMaterial','ui.router','techvolksControllers']);

/**
 * Application config
 * @params $stateProvider,$$mdThemingProvider
 */
 app.config(function($mdThemingProvider,$stateProvider, $urlRouterProvider, $mdIconProvider) {

 	//configuring the material color plates
 	$mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('lime');

	$mdIconProvider
      .defaultIconSet("./svg/avatars.svg", 128)
      .icon("menu"       , "./svg/menu.svg"        , 24)
      .icon("share"      , "./svg/share.svg"       , 24)
      .icon("google_plus", "./svg/google_plus.svg" , 512)
      .icon("hangouts"   , "./svg/hangouts.svg"    , 512)
      .icon("twitter"    , "./svg/twitter.svg"     , 512)
      .icon("phone"      , "./svg/phone.svg"       , 512);

    //configuring the routes
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home',{
    	url:'/home',
    	templateUrl:'../templates/partials/home.html',
    	controller:'homeController'
    });
 });


 app.run(function($rootScope,$mdSidenav, $mdBottomSheet, $log){
    $rootScope.selected     = null;
    $rootScope.menuList     = [];

     
    $rootScope.menuList  = [
      {
        name: 'Home',
        avatar: '/svg/home.svg',
      },
      {
        name: 'Snippets',
        avatar: '/svg/snippet.svg',
      },
      {
        name: 'About Us',
        avatar: '/svg/about.svg',
      },
      {
        name: 'Contact',
        avatar: '/svg/contact.svg',
      }
    ];
        
    $rootScope.selected = $rootScope.menuList[0];

    /**
     * First hide the bottomsheet IF visible, then
     * hide or Show the 'left' sideNav area
     */
    $rootScope.toggleList   = function() {
      //var pending = $mdBottomSheet.hide() || $q.when(true);

      //pending.then(function(){
        $mdSidenav('left').toggle();
      //});
    };


});
