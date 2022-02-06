import { IS_CARD_SHOWN } from "./constants";
import { ADD_TO_CART } from "./constants";
import { REMOVE_FROM_CART } from "./constants";
import { IS_BUTTON_HIGHLIGHTED } from "./constants";
import { DUMMY_MEALS } from "./constants";

const initStateCartDisplay = {
  IsCartShown: false,
};

export const cartDisplay = (state = initStateCartDisplay, action = {}) => {
  switch (action.type) {
    case IS_CARD_SHOWN:
      return { ...state, IsCartShown: action.payload };
    default:
      return state;
  }
};

const initStateHeadeButton = {
  IsButtonHighlighted: false,
};

export const buttonHighlight = (state = initStateHeadeButton, action = {}) => {
  switch (action.type) {
    case IS_BUTTON_HIGHLIGHTED:
      return { ...state, IsButtonHighlighted: action.payload };
    default:
      return state;
  }
};

const initStateItems = {
  items: [],
  totalPrice: 0,
};

export const cartItemChange = (state = initStateItems, action = {}) => {
  const { items, totalPrice } = state;

  switch (action.type) {
    case ADD_TO_CART: {
      const { idTag, amount } = action.payload;

      const addedItemIndex = DUMMY_MEALS.findIndex((item) => item.id === idTag);
      const addedItem = DUMMY_MEALS[addedItemIndex];

      const addedItemComplete = { ...addedItem, amount };

      const updatedTotalPrice = totalPrice + addedItemComplete.price * amount;

      let updatedItem;
      let updatedItems;

      const existingItemIndex = items.findIndex((item) => item.id === idTag);
      const existingItem = items[existingItemIndex];

      if (existingItem) {
        updatedItem = { ...existingItem, amount: existingItem.amount + amount };
        updatedItems = [...items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = items.concat(addedItemComplete);
      }

      return {
        ...state,
        items: updatedItems,
        totalPrice: updatedTotalPrice,
      };
    }

    case REMOVE_FROM_CART: {
      const { idTag, amount } = action.payload;

      const removedItemIndex = items.findIndex((item) => item.id === idTag);
      const removedItem = items[removedItemIndex];

      const updatedTotalPrice = totalPrice + removedItem.price * amount;

      let updatedItem;
      let updatedItems;

      if (removedItem.amount === 1) {
        updatedItems = items.filter((item) => item.id !== idTag);
      } else {
        updatedItem = { ...removedItem, amount: removedItem.amount + amount };
        updatedItems = [...items];
        updatedItems[removedItemIndex] = updatedItem;
      }

      return {
        ...state,
        items: updatedItems,
        totalPrice: updatedTotalPrice,
      };
    }

    default:
      return state;
  }
};
