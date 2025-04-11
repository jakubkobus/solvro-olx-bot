import type { HttpContext } from "@adonisjs/core/http";

import SearchQuery from "#models/search_query";
import { createSearchQueryValidator } from "#validators/search_query";

export default class SearchQueriesController {
  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(createSearchQueryValidator);
    const searchQuery = await SearchQuery.create(data);
    return response.created(searchQuery);
  }

  async index({ response }: HttpContext) {
    const searchQueries = await SearchQuery.query();
    return response.json(searchQueries);
  }

  async show({ params, response }: HttpContext) {
    const searchQuery = await SearchQuery.findOrFail(params.id);
    return response.json(searchQuery);
  }
}
