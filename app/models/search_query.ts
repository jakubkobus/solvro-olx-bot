import { DateTime } from "luxon";

import { BaseModel, column } from "@adonisjs/lucid/orm";

export default class SearchQuery extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare categoryId: string;

  @column()
  declare priceMin: number;

  @column()
  declare priceMax: number;

  @column()
  declare locationId: number;

  @column()
  declare districtId: number;

  @column()
  declare regionId: number;

  @column()
  declare paginationLimit: number;

  @column()
  declare refreshedAt: DateTime;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime;
}
