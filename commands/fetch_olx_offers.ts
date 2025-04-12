import { DateTime } from "luxon";

import { BaseCommand } from "@adonisjs/core/ace";
import type { CommandOptions } from "@adonisjs/core/types/ace";

import SearchQuery from "#models/search_query";
import type { OLXOffer } from "#types/olx_offer";

export default class FetchOlxOffers extends BaseCommand {
  static commandName = "fetch:olx-offers";
  static description = "Fetch offers from OLX based on search queries";

  static options: CommandOptions = {
    startApp: true,
  };

  async run() {
    const searchQueries = await SearchQuery.all();

    for (const sq of searchQueries) {
      const url = new URL("https://www.olx.pl/api/v1/offers");
      url.searchParams.append("category_id", sq.categoryId.toString());
      url.searchParams.append("city_id", sq.locationId.toString());
      url.searchParams.append("district_id", sq.districtId.toString());
      url.searchParams.append("region_id", sq.regionId.toString());
      url.searchParams.append(
        "filter_float_price:from",
        sq.priceMin.toString(),
      );
      url.searchParams.append("filter_float_price:to", sq.priceMax.toString());
      url.searchParams.append("sort_by", "created_at:desc");
      url.searchParams.append("limit", sq.paginationLimit.toString());

      const response = await fetch(url);
      const data = (await response.json()) as { data: OLXOffer[] };

      if (!response.ok) {
        this.logger.error(`Failed to fetch offers for search query ${sq.id}`);
        continue;
      }

      if (data.data.length === 0) {
        this.logger.info(`No offers found for search query ${sq.id}`);
        continue;
      }

      const refreshedAt = sq.refreshedAt.toJSDate();

      for (const offer of data.data) {
        const createdAt = new Date(offer.created_time);

        if (createdAt > refreshedAt) {
          this.logger.success(
            `Znaleziono nowe mieszkanie spelniajace wymagania dla zapytania ${sq.id}: ${offer.title}`,
          );
          sq.refreshedAt = DateTime.now();
          await sq.save();
        }
      }
    }
  }
}
