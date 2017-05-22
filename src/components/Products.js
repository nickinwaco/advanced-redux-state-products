/*
Products Componenet

DUMB Component

need access to lifecyle.
https://facebook.github.io/react/docs/react-component.html
  constructor()
  componentWillMount()
  render()
  componentDidMount()
...more in the url

*/

import React, {Component} from "react";
import CollapsableMapper from "./CollapsableMapper";

class Products extends Component {
  componentWillMount() {
  //  this.props.startProductLoad
  //  get this information from ACTIONS
    if (this.props.onMount) {
      this.props.onMount()
    }
  }

  render() {
    return (
      <CollapsableMapper data={this.props.products} field="name" />
    );
  }
}


export default Products;


/*
Project notes:
we converted thsi from a functional component to a Class based so we
could get access to lifecyle events

https://facebook.github.io/react/docs/react-component.html


*/
