#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const anwsers = await inquirer.prompt([
  {
    type: "number",
    name: "n1",
    message: "ENTER THE NUMBER OF n1",
  },
  {
    type: "number",
    name: "n2",
    message: "ENTER THE NUMBER OF n2",
  },
  {
    type: "list",
    name: "operator",
    message: "Choose the operator",
    choices: ["Addition", "Subtraction", "Division", "Multiplication"],
  },
]);

if (anwsers.operator === "Addition") {
  console.log(chalk.bgGreen(anwsers.n1 + anwsers.n2));
} else if (anwsers.operator === "Subtraction") {
  console.log(chalk.bgGreen(anwsers.n1 - anwsers.n2));
} else if (anwsers.operator === "Division") {
  if (anwsers.n2 != 0) {
    console.log(chalk.bgGreen(anwsers.n1 / anwsers.n2));
  } else {
    console.log(chalk.bgRed("infinite"));
  }
} else if (anwsers.operator === "Multiplication") {
  console.log(chalk.bgGreen(anwsers.n1 * anwsers.n2));
} else {
  console.log(chalk.bgRed("invalid number"));
}
