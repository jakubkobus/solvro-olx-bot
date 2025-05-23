import type { HttpContext } from "@adonisjs/core/http";

import SearchQuery from "#models/search_query";
import { createSearchQueryValidator } from "#validators/create_search_query";
import { updateSearchQueryValidator } from "#validators/update_search_query";

export default class SearchQueriesController {
  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(createSearchQueryValidator);
    const searchQuery = await SearchQuery.create(data);
    return response.created(searchQuery);
  }

  async index({ request }: HttpContext) {
    const page = request.input("page", 1);
    const perPage = request.input("per_page", 5);
    const searchQueries = await SearchQuery.query().paginate(page, perPage);
    return searchQueries;
  }

  async show({ params, response }: HttpContext) {
    const searchQuery = await SearchQuery.findOrFail(params.id);
    return response.json(searchQuery);
  }

  async update({ params, request, response }: HttpContext) {
    const data = await request.validateUsing(updateSearchQueryValidator);
    const searchQuery = await SearchQuery.findOrFail(params.id);
    searchQuery.merge(data);
    await searchQuery.save();
    return response.json(searchQuery);
  }

  async destroy({ params, response }: HttpContext) {
    const searchQuery = await SearchQuery.findOrFail(params.id);
    await searchQuery.delete();
    return response.json({
      message: "Search query deleted successfully",
    });
  }
}
