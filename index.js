import myCollection from "./collection.js";
import chalk from "chalk";

// Task 2c
function describeItem(item) {
  if (item.count === 1) {
    console.log(
      `I have a ${chalk.cyan(
        item.name
      )}. Here's what I like about it: ${chalk.green(item.whatILike)}`
    );
  } else {
    console.log(
      `I have ${chalk.yellow(item.count)} ${chalk.cyan(
        item.name
      )}'s Here's what I like about it: ${item.whatILike}`
    );
  }
}
describeItem(myCollection[1]);

// Task 2d

function describeCollection(arr) {
  for (let i = 0; i < arr.length; i++) {
    describeItem(arr[i]);
  }
}
describeCollection(myCollection);

//Alternative forEach() solution
//myCollection.forEach(describeItem);
