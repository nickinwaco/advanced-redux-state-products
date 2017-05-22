/*
actions + action creator functions
./actions/index.js

Actions are payloads of information that send data from your application to your store.

Action creators are exactly that—functions that create actions.

By usingn "THUNK" middleware we can return a function for callback vs an
object.  Below we use "dispatch" over and over

dispatch can only pass actions.

*/

// actions
export const PRODUCT_LOAD_START = "PRODUCT_LOAD_START";

// action creator
export function productLoadStart() {
  return (dispatch) => {  // this is a thunk
    dispatch({
      type: PRODUCT_LOAD_START
    });

    fetch("http://localhost:4001/products")
      .then((response) => {
        console.log("execute this when data is retrieved.", response);
        return response.json();
      })
      .then((data) => {
        console.log('parsed json', data)
        dispatch(productLoadSuccess(data));
      })
      .catch((err) => {
        dispatch(productLoadError());
        console.log("oops, error!");
      });
  };
}

// actions
export const PRODUCT_LOAD_SUCCESS = "PRODUCT_LOAD_SUCCESS";

// action creator
export function productLoadSuccess(products) {
  console.log("produces inside actions", products)
  return {
    type: PRODUCT_LOAD_SUCCESS,
    // products: products  ---short hand is belwo
    // payload:  products - aka
     products
    // data: products

  };
}



export const PRODUCT_LOAD_ERROR = "PRODUCT_LOAD_ERROR";
export function productLoadError() {
  return {
    type: PRODUCT_LOAD_ERROR,
    message: " "
  };
}
