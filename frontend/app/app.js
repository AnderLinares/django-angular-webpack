  /* Libs */
  require("angular/angular");
  require("angular-route/angular-route");
  require("angular-resource/angular-resource");

  /* Globals */
  _ = require("lodash");
  _urlPrefixes = {
    API: "api/v1/", 
    TEMPLATES: "static/app/"
  };

  /* Components */
  require("./components/home/home");
  require("./components/game/game");

  /* App Dependencies */
  angular.module("myApp", [
    "Home", // this is our component
    "Game",
    "ngResource",
    "ngRoute"
  ]);

  /* Config Vars */
  var routesConfig = require("./routes");

  /* App Config */
  angular.module("myApp").config(routesConfig);














