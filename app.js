var express = require("express");
var app = express();
require('es6-promise').polyfill();
require('isomorphic-fetch');
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/", async (req, res) => {
  let resource = [];
  try 
  {
    resource = await fetch('https://full-stack-node-app-daniele-scaramuzzi-full-test.ibmcloud-roks-jo67p-6ccd7f378ae819553d37d5f2ee142bd6-0000.us-south.containers.appdomain.cloud/')
      .then((res) => {
          return res.json();
      });
  }
  catch (e)
  {
    return e;
  }
  res.send(resource);
 });