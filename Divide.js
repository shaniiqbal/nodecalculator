const figlet = require('figlet');
const inquirer = require("inquirer");
const calculator = require("../../calculator");
 
figlet('Welcome to Divide', function(err, data) {
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
      name: 'DivideVal1',
      message: 'FirstVal',
      type: 'input',
      
    },
    {
      name: 'DivideVal2',
      message: 'SecondVal',
      type: 'input',
        
    },
  ]).then(answers => {
   
    if(answers.DivideVal1 == ""){
      console.log("Value is empty");   
      return;     
    }
    if(answers.DivideVal2 == ""){
        console.log("Value is empty");
        return;    
    }
    calculator.divide(answers.DivideVal1,answers.DivideVal2)
});
