const figlet = require('figlet');
const inquirer = require("inquirer");
const calculator = require("../../calculator");
 
figlet('Welcome to Multiply', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
    console.log("Please select a value")

    //let Calculate = require("./calculator");
});


inquirer
  .prompt([
    {
      name: 'MultiVal1',
      message: 'FirstVal',
      type: 'input',
      
    },
    {
      name: 'MultiVal2',
      message: 'SecondVal',
      type: 'input',
        
    },
  ]).then(answers => {
   
    if(answers.MultiVal2 == ""){
      console.log("Value is empty");   
      return;     
    }
    if(answers.MultiVal1 == ""){
        console.log("Value is empty");
        return;    
    }
    calculator.multiply(answers.MultiVal1,answers.MultiVal2)
});
