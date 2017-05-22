/*

this is the Container.

it is the only way to edit the store

actions are payloads.   action creators are fuctnions that send
payload to trigger state changes by reducers.  Reducers take the initial state
plus and action and chagne the STATE.  STATE is 'returned' either empty or full
of something.  STATE chagnes are kept in the store.

Those STATE changes while saved in reducers
are sent into containers (smart componenets) whose job is to PRESENT Those
to a component that will take action from the USER.  It is the only
presentational component aware of the redux.  and thus is the only thing that can
trigger actions, reducers to update the Store.



*/

import { connect } from "react-redux";
import Products from "../components/Products";
import { productLoadStart } from "../actions";

function mapStateToProps(state) {
  console.log("in map state to props ", state)
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      console.log("products did mount");
      dispatch(productLoadStart());  // dispatches the action to Redux
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Products);
