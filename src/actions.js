import { IS_CARD_SHOWN } from "./constants";

export const setIsCartShown = (event) => ({
  type: IS_CARD_SHOWN,
  payload: event,
});
