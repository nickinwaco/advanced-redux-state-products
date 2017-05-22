/*
Reducer file

Gets datat from an action.  This is done with Dispatch
in the action file
*/

import {combineReducers} from "redux";
import _ from "lodash";
import {PRODUCT_LOAD_SUCCESS,
        PRODUCT_LOAD_START,
        PRODUCT_LOAD_ERROR
} from "../actions/";


function comments(state = [], action) {
  return state;
}

function products(state = [], action) {
  switch (action.type) {
    case PRODUCT_LOAD_START:
      return [];
    case PRODUCT_LOAD_ERROR:
      return [];
    case PRODUCT_LOAD_SUCCESS:
    return action.products;
      // console.log("products reducer returned here", action);
      // return state.concat(action.data);
    case 'PRODUCT_ADD':
      return [
        ...state,
        action.products
      ];
    case 'PRODUCT_REMOVE':
    //  return state.filter((product) => product !== action.product);
    return _.without(state, action.products);
  }
  return state;
}


const rootReducer = combineReducers({
  comments,
  products
});
export default rootReducer;
