import { IS_CARD_SHOWN } from "./constants";

const initialState = {
  IsCartShown: false,
};

export const cartDisplay = (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_CARD_SHOWN:
      return { ...state, IsCartShown: action.payload };
    default:
      return state;
  }
};
