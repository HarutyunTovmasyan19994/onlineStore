import { PRODUCT_CATEGORY_CLOTHES } from "./action";

const initialStateCategory = {
  id: null,
};

const categoeyReducers = (state = initialStateCategory, action) => {
  switch (action.type) {
    case PRODUCT_CATEGORY_CLOTHES:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};

export default categoeyReducers;
