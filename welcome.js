const figlet = require('figlet');
 
figlet('CALCULATOR', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
    console.log("welcome to Calculate!")
    
});
let Calculate = require("./calculator");

