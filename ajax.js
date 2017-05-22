/*
AJAX fetch file
used to get API infomariont

https://github.com/github/fetch

dependencies
yarn add whatwg-fetch


import "whatwg-fetch";
fetch('/users.json')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })


*/

import "whatwg-fetch";

fetch("http://localhost:4000/products")
  .then((response) => {
    console.log("execute this when data is retrieved.", response);
  });
