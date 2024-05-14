#! /usr/bin/env node

console.log("\n%%%%%%%%% WELCOME TO THE SUPER STORE %%%%%%%%%\n");

import inquirer from "inquirer";

//Initialize an Empty Array
let items: String[] = [];

let condition: boolean = true;

while (condition) {

//Input Action from User 
  let userInput = await inquirer.prompt([
    {
      message: "What whould you like to do? ",
      name: "action",
      type: "list",
      choices: [
        "Add Items",
        "Delete Items",
        "Delete All Items",
        "Update Items",
        "View Items",
        "Exit",
      ],
    },
  ]);

  //Add Items condition
    if (userInput.action === "Add Items") {
      let addItems = await inquirer.prompt([
        {
          message: "What would you want to purchase: ",
          name: "product",
          type: "string",
        },
      ]);
        if(addItems.product.length === 0){
          console.log("\nYour Selection is Empty");
        }
      else {
      items.push(addItems.product);
      console.log("\nItem successfully added in your list :\n");
      }
    
      items.forEach((item, index) => {
          console.log(index + 1, (item));
    });
    console.log('\t');
  }

  //Delete condition ===========================================
  if (userInput.action === "Delete Items") {
    if (items.length === 0) {
      console.log("\nYou don't have any item to delete");
    } else {
      let indexItem = await inquirer.prompt([
        {
          message: "Select the Item which you want to Delete :",
          type: "list",
          name: "delete",
          choices: items.map((item) => item),
        },
      ]);

      let deleteItem = items.findIndex((item) => item === indexItem.delete);
      items.splice(deleteItem, 1);
      console.log("\nItem Successfully deleted from the list :\n");
      items.forEach((item, index) => {
        console.log(index + 1, item);
      });
    }
    console.log("\t");
  }

  //Delete All Items ==========================================
  if (userInput.action === "Delete All Items") {
    if (items.length == 0) {
      console.log("\nYou don't have Items to delete\n");
    } else {
      items.splice(0);
      console.log("\nYour all Items have been deleted successfully\n");
    }
  }

  //Update condition ===========================================
  if (userInput.action === "Update Items") {
    if (items.length == 0) {
      console.log("\nYou don't have any Item to update");
    } else {
      let indexItem = await inquirer.prompt([
        {
          message: "Select the Item which you want to Update :",
          type: "list",
          name: "indexUpdate",
          choices: items.map((item) => item),
        },
      ]);

      let updatedItem = await inquirer.prompt([
        {
          message: "Enter Your New Item :",
          type: "string",
          name: "newItem",
        },
      ]);

      let index = items.findIndex((item) => item === indexItem.indexUpdate);

      items[index] = updatedItem.newItem;
      console.log("\nITEM SUCCESSFULLY UPDATED IN THE LIST :\n");

      items.forEach((items, index) => {
        console.log(index + 1, items);
      });
    }
    console.log("\t");
  }

  //View Items =================================================
  if (userInput.action === "View Items") {
    if (items.length == 0) {
      console.log("\nYou don't have any Item in the list");
    } else {
      console.log("\nTHE LIST ITEMS YOU HAVE PURCHASED :\n");
      items.forEach((items, index) => {
        console.log(index + 1, items);
      });
    }
    console.log("\t");
  }

  //Exit condition ==============================================
  if (userInput.action === "Exit") {
    condition = false;
    console.log("\nThanks for Bought ", items);
    console.log("\n<<<<< GOOD BYE >>>>>");
  }
}
