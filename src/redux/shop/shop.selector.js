import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections
)
export const selectCollectionsForPreview=createSelector(
    [selectShop],
    collections => Object.keys(collections).map(key=>collections[key])
)

export const selectCollection = collectionParam => createSelector(
    [selectShopItems],
    collections=>collections[collectionParam]
)