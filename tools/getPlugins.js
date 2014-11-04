var npm = require("npm");

/* 

Run by doing:

cd tools
npm install npm
node getPlugins.js > ../plugins.json

*/

npm.load({}, function (er) {
  if (er) console.error(er);
  npm.commands.search(['ep_'], /*silent?*/true, function(er, results) {
    var plugins = results;
    if(er) console.error(er);
    // console.log(results);
    for (result in results){
      // console.log(results[result].name.substring(0,3));
      // Delete non plugins
      if(results[result].name.substring(0,3) !== "ep_"){
        delete plugins[result];
        // console.log("deleting", result);
      }
    };
    console.log(JSON.stringify(plugins));
  })
});
