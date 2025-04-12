/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from "@adonisjs/core/services/router";

const SearchQueriesController = () =>
  import("#controllers/search_queries_controller");

// #1
router.post("api/v1/search-queries", [SearchQueriesController, "store"]);

// #2
router.get("api/v1/search-queries", [SearchQueriesController, "index"]);
router.get("api/v1/search-queries/:id", [SearchQueriesController, "show"]);

// #3
router.put("api/v1/search-queries/:id", [SearchQueriesController, "update"]);

// #4
router.delete("api/v1/search-queries/:id", [
  SearchQueriesController,
  "destroy",
]);
