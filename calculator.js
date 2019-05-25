const chalk = require("chalk");
let retrun;
let add = (data,data1) => {
    console.log(chalk.blue(data)+"+"+chalk.blue(data1)+ "=" + ((data + data1)));
}
let subtract = (data,data1) => {
    console.log(chalk.blue(data)+"-"+chalk.blue(data1)+ "=" + ((data - data1)));
}
let multiply = (data, data1) => {
    console.log(chalk.blue(data)+"X"+chalk.blue(data1)+ "=" + ((data * data1)));
}
let divide = (data, data1) => {
    console.log(chalk.blue(data)+"/"+chalk.blue(data1)+ "=" + ((data / data1)));
}

module.exports = { add,subtract,multiply,divide,retrun }