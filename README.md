# react-complete-project

# Step by step guide

# How to create react app?

Resource - https://reactjs.org/docs/create-a-new-react-app.html

Example - npx create-react-app my-app -> (my-app, is Project Name, write your own project name)

# How to create custom component?

Resource - https://reactjs.org/docs/components-and-props.html

Create a new folder - components - for better organizing

Create a new file named as you component. Ex - ExpenseItem.js
Follow the naming convension.

This file need to export and import at base file or where you need to use this component. Ex - import ExpenseItem from "./components/ExpenseItem"

# How to add css to component?

Naming convenstion - css file will be same as component name. Ex - ExpenseItem.css

css file need to import in component. Ex - import "./ExpenseItem.css";

To add class name to component element you have to add className attribute.
Ex - <div className="expense-time">

# How to call dynamic data in react?

Using curly braces {}
Ex -
const expenseAmount = 294.67;
{expenseAmount}

# Passing Data via "props"

Props allows you to make your components reusable and it allows to pass data from component to component.

First, Pass the data through component attribute.

<!-- App.js -->

const expenses = [
{
id: "e1",
title: "Toilet Paper",
amount: 94.12,
date: new Date(2020, 7, 14),
}

<ExpenseItem
title={expenses[0].title}
amount={expenses[0].amount}
date={expenses[0].date}
/>

<!-- ExpenseItem.js -->

function ExpenseItem(props) {
const expenseDate = props.date;
const expenseTitle = props.title;
const expenseAmount = props.amount;

return (

<div className="expense-item">
<div>{expenseDate.toISOString()}</div>
<div className="expense-item__description">
<h2>{expenseTitle}</h2>
<div className="expense-item__price">${expenseAmount}</div>
</div>
</div>
);
}

# Splitting Components Into Multiple Components

When we need to split a component, create a new js file. Ex - ExpenseDate.js

Then copy the code needed to split, put the code on the new file and export.

Import the file where needed.

<!-- ExpenseDate.js -->

function ExpenseDate(props) {
const month = props.date.toLocaleString("en-US", { month: "long" });
const day = props.date.toLocaleString("en-US", { day: "2-digit" });
const year = props.date.getFullYear();

return (

<div className="expense-date">
<div className="expense-date__month">{month}</div>
<div className="expense-date__year">{year}</div>
<div className="expense-date__day">{day}</div>
</div>
);
}

<!-- ExpenseItem.js -->
<div className="expense-item">
    <ExpenseDate date={props.date} />
    <div className="expense-item__description">
    <h2>{expenseTitle}</h2>
    <div className="expense-item__price">${expenseAmount}</div>
    </div>
</div>

# The concept of "Composition" (children props)

Composition - multiple component used to bulding a user interface from smaller building blocks is called composition

1. Create e custom component
2. Use {props.children}
3. Use js logic to add existing className

Ex - Check out Card.js({props.children}, CSS). ExpenseItem.js, Expense.js

# Organizing Component Files

Create sub folder in components based on work.

1. Expenses
2. UI

# Listen to event & Working with event Handlers

Naming Convension, add Hander beforeEnd :p
add event listner as attribute.
Ex -
const clickhandler = () => console.log("clicked");
<button onClick={clickhandler}>Change Name</button>

# Working with "State"

1. Import useState
2. create constant. Ex - const[title, setTitle] = useState(props.title)
3. Conduct an event and use setTitle()

ExpenseItem.js For more details

# How can you change what a component displays on the screen?

Create some "state" value (via useState) which you can then change and output in JSX.
