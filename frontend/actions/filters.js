export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
export const UPDATE_RENT = "UPDATE_RENT";
export const UPDATE_LISTING_TYPE = "UPDATE_LISTING_TYPE";
export const UPDATE_BEDROOMS = "UPDATE_BEDROOMS";
export const UPDATE_BATHROOMS = "UDPATE_BATHROOMS";
export const UPDATE_FEE = "UPDATE_FEE";
export const UPDATE_PARKING = "UPDATE_PARKING";
export const UPDATE_PETS = "UPDATE_PETS";

export const updateBounds = bounds => ({
  type: UPDATE_BOUNDS,
  bounds
});

export const updateRent = rent => ({
  type: UPDATE_RENT,
  rent
});

export const updateListingType = listingType => ({
  type: UPDATE_LISTING_TYPE,
  listingType
});

export const updateBedrooms = bedrooms => ({
  type: UPDATE_BEDROOMS,
  bedrooms
});

export const updateBathrooms = bathrooms => ({
  type: UPDATE_BATHROOMS,
  bathrooms
});

export const updateFee = () => ({
  type: UPDATE_FEE
});

export const updateParking = () => ({
  type: UPDATE_PARKING
});

export const updatePets = pets => ({
  type: UPDATE_PETS,
  pets
});
