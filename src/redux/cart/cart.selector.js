import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    selectCartItems => selectCartItems.reduce((accum, cartItem) => accum + cartItem.quantity, 0)
)
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)
export const selectCartTotal=createSelector(
    [selectCartItems],
    selectCartItems => selectCartItems.reduce((accum, cartItem) => accum + cartItem.quantity*cartItem.price, 0)
)