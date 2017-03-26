function GameService($resource) {
    /**
     * @name GameService
     *
     * @description
     * A service providing game data.
     */
  var that = this;

    /**
     * A resource for retrieving game data.
     */
  that.GameResource = $resource(_urlPrefixes.API + "games/:game_id/");

    /**
     * A convenience method for retrieving Game objects.
     * Retrieval is done via a GET request to the ../games/ endpoint.
     * @param {object} params - the query string object used for a GET request to ../games/ endpoint
     * @returns {object} $promise - a promise containing game-related data
     */
  that.getGames = function (params) {
    return that.GameResource.query(params).$promise;
  };
}

angular.module("Game")
    .service("GameService", ["$resource", GameService]);