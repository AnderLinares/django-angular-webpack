  function routesConfig($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: _urlPrefixes.TEMPLATES + "components/home/home.html",
      label: "Home"
    })
    .when("/games", {
      templateUrl: _urlPrefixes.TEMPLATES + "components/game/game.html",
      label: "Game"
    })
    .otherwise({
      templateUrl: _urlPrefixes.TEMPLATES + "404.html"
    });
  }

  routesConfig.$inject = ["$routeProvider"];

  module.exports = routesConfig;