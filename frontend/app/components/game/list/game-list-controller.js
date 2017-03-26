  function GameListController(GameService) {
    var that = this;

    /* Stored game objects. */
    that.games = [];

  /**
  * Initialize the game list controller.
  */
    that.init = function () {
      return GameService.getGames().then(function (games) {
        that.games = games;
      });
    };
  }

  angular.module("Game")
    .controller("GameListController", [
      "GameService",
      GameListController
    ]);