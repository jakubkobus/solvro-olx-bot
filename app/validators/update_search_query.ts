import vine from "@vinejs/vine";

export const updateSearchQueryValidator = vine.compile(
  vine.object({
    name: vine.string().trim().optional(),
    priceMin: vine.number().positive().optional(),
    priceMax: vine.number().positive().optional(),
    locationId: vine.number().optional(),
  }),
);
