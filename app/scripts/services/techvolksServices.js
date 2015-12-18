(function(){
  'use strict';

 
  techvolksServices.service('menuService', ['$q', menuService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function menuService($q){
    var list = [
      {
        name: 'Home',
        avatar: 'svg-1',
        url:"/home"
      },
      {
        name: 'About',
        avatar: 'svg-2',
      },
      {
        name: 'Snippets',
        avatar: 'svg-3',
      },
      {
        name: 'Contact',
        avatar: 'svg-4',
      }
    ];

    // Promise-based API
    return {
      loadAllMenus : function() {
        // Simulate async nature of real remote calls
        return $q.when(list);
      }
    };
  }

})();
