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

router.get("/", async () => "It works!");

router.post("api/v1/search-queries", [SearchQueriesController, "store"]);

router.get("api/v1/search-queries", [SearchQueriesController, "index"]);
router.get("api/v1/search-queries/:id", [SearchQueriesController, "show"]);

router.put("api/v1/search-queries/:id", [SearchQueriesController, "update"]);
