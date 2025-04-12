import vine from "@vinejs/vine";

export const createSearchQueryValidator = vine.compile(
  vine.object({
    categoryId: vine.number(),
    priceMin: vine.number().positive().optional(),
    priceMax: vine.number().positive(),
    locationId: vine.number(),
    districtId: vine.number(),
    regionId: vine.number(),
    paginationLimit: vine.number().positive(),
  }),
);
