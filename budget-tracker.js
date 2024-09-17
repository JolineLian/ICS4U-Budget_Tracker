const prompt = require('prompt-sync')();
let budget = prompt('input a budget: ');
let expenses = [];

function addExpense(amount, category) {
    if (budget<parseInt(amount)) {
        console.log('The amount is greater than your budget');
    } else {
        budget -= amount;
        expenses.push([amount, category]);
        console.log(expenses);
    }

    displayOptions();
}

function totalExpense() {
    let totalExpense = 0;
    for (let i=0; i<expenses.length; i++) {
        totalExpense += parseInt(expenses[i][0]);
    }
    console.log(totalExpense);

    displayOptions();
}

function checkBudget() {
    console.log(budget);

    displayOptions();
}

function removeExpense(category) {

    let sExpenses = expenses
    let n = 0.0;
    let cLength = category.length + '';
    cLength = parseInt(cLength);
    sExpenses = sExpenses.toString() + '';

    for (let i=0; i<sExpenses.length-cLength+1; i++) {
        if (sExpenses.slice(i, i+1) == ',') {
            n+=0.5;
        }
        if (sExpenses.slice(i, i+cLength) == category) {
            let a = [];
            let am = 0;

            n=Math.floor(n);
            a = expenses.splice(n, 1);
            a = a.toString();
            for (let j=0; j<a.length; j++) {
                if (a.slice(j,j+1) == ',') {
                    am = a.slice(0, j);
                }
            }
            budget += parseInt(am);
            displayOptions();
        }
    }

    displayOptions();
}

function displayOptions() {
    console.log('current expenses: ' + expenses)
    console.log('1. Add Expense');
    console.log('2. View Total Expense');
    console.log('3. Check Budget');
    console.log('4. Remove Expense');
    console.log('5. Exit Application');

    choose()
}

function choose() {
    let choice = prompt('what would you like to view: ')
    while (choice != '5') {
        if (choice == '1') {
            let amount = prompt('how much would you like to add: ');
            let category = prompt('what category: ')

            addExpense(amount, category);
        } else if (choice == '2') {
            totalExpense();
        } else if (choice == '3') {
            checkBudget()
        } else if (choice == '4') {
            let category = '';
            category = prompt('what category: ');
            removeExpense(category);
        } else {
            console.log('invalid option');
            choose();
        }
    }
    process.exit(0);
}

displayOptions();
