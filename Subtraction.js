const figlet = require('figlet');
const inquirer = require("inquirer");
const calculator = require("./../../calculator");
 
figlet('Welcome to Subtraction', function(err, data) {
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
      name: 'SubVal1',
      message: 'FirstVal',
      type: 'input',
      
    },
    {
      name: 'SubVal2',
      message: 'SecondVal',
      type: 'input',
        
    },
  ]).then(answers => {
   
    if(answers.SubVal1 == ""){
      console.log("Value is empty");   
      return;     
    }
    if(answers.SubVal2 == ""){
        console.log("Value is empty");
        return;    
    }
    calculator.subtract(answers.SubVal1,answers.SubVal2)
});
