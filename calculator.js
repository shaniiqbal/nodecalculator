const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: 'whattodo',
      message: 'What you want to do?',
      type: 'list',
      choices:["Addition","Subtraction","Multiplication","Division"]
    },
  ])
  .then(answers => {
    if(answers.whattodo == "Addition"){
      const Addition = require("./../module/Addition")
    }else if(answers.whattodo == "Subtraction"){
      const Addition = require("./../module/Subtraction")
    }else if(answers.whattodo == "Multiplication"){
      const Addition = require("./../module/multiply")
    }else if(answers.whattodo == "Division"){
      const Addition = require("./../module/Divide")
    }
    //console.info('Answer:', answers.whattodo);
  });