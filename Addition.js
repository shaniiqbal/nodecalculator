const figlet = require('figlet');
const inquirer = require("inquirer");
const calculator = require("./../../calculator");
 
figlet('Welcome to Addition', function(err, data) {
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
      name: 'AddVal1',
      message: 'FirstVal',
      type: 'input',
      
    },
    {
        name: 'AddVal2',
        message: 'SecondVal',
        type: 'input',
        
    },
  ]).then(answers => {
   
    if(answers.AddVal1 == ""){
      console.log("Value is empty");   
      return;     
    }
    if(answers.AddVal2 == ""){
        console.log("Value is empty");
        return;    
    }
    calculator.add(answers.AddVal1,answers.AddVal2)
});
