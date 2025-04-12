import vine from "@vinejs/vine";

export const updateSearchQueryValidator = vine.compile(
  vine.object({
    categoryId: vine.number().optional(),
    priceMin: vine.number().positive().optional(),
    priceMax: vine.number().positive().optional(),
    locationId: vine.number().optional(),
    districtId: vine.number().optional(),
    regionId: vine.number().optional(),
    paginationLimit: vine.number().positive().optional(),
  }),
);
