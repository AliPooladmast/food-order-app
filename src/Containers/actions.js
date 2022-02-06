import { IS_CARD_SHOWN } from "./constants";
import { ADD_TO_CART } from "./constants";
import { REMOVE_FROM_CART } from "./constants";
import { IS_BUTTON_HIGHLIGHTED } from "./constants";

export const setIsCartShown = (event) => ({
  type: IS_CARD_SHOWN,
  payload: event,
});

export const setIsButtonHighlighted = (event) => ({
  type: IS_BUTTON_HIGHLIGHTED,
  payload: event,
});

export const setAddCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const setRemoveCart = (item) => ({
  type: REMOVE_FROM_CART,
  payload: item,
});
