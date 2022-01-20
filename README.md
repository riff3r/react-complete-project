# react-complete-project

Course Link - udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25598358#announcements

## Step by step guide

## Module 3 - React Basics & Working With Component

## How to create react app?

Resource - https://reactjs.org/docs/create-a-new-react-app.html

Example - npx create-react-app my-app -> (my-app, is Project Name, write your own project name)

# How to create custom component?

Resource - https://reactjs.org/docs/components-and-props.html

Create a new folder - components - for better organizing

Create a new file named as your component. Ex - ExpenseItem.js
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

Naming Convension, add Handler beforeEnd :p
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

For example search previous state in react doc - https://reactjs.org/docs/hooks-reference.html

IMPORTANT NOTE - If the new state is computed using the previous state, you can pass a function to setState. The function will receive the previous value, and return an updated value. Here’s an example of a counter component that uses both forms of setState:

const [state, setState] = useState({});
setState(prevState => {
// Object.assign would also work
return {...prevState, ...updatedValues};
});

# Listening to User Input

# Working with multiple States

^ Check React Docs, ExpenseForm.js for reference

Declaring state variables as a pair of [something, setSomething] is also handy because it lets us give different names to different state variables if we want to use more than one:

function ExampleWithManyStates() {
// Declare multiple state variables!
const [age, setAge] = useState(42);
const [fruit, setFruit] = useState('banana');
const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

# Multiple Value Using One State Instead (And What's Better) - Opposite of multiple states

By calling useState() only one and then by passing in an object as a value, not a string or number but an object.You can now group together, your three states. Ex -

const [userInput, setUserInput] = useState({
enteredTitle: '',
enteredAmount: '',
enteredDate: '',
})

# Updating State That Depends On The Previous State

State could be chnaged in many way, Right now the way is replacing previous state with new state. Ex - replacing above state

const titleChangeHandler = (event) => {
setUserInput({ ...userInput, enteredTitle: event.target.value });
setUserInput((prevState) => {
return { ...prevState, enteredTitle: event.target.value };
});
};

# Handling form submission

Form submission method should use a function. This function should use data from new state. Ex -

const submitHandler = (event) => {
event.preventDefault();
console.log(
userInput.enteredTitle,
userInput.enteredAmount,
userInput.enteredDate
);
};

# Adding Two-Way Binding

For input we dont just listen them but also pass new value into the input. So we can reset or change input programmatically. All we have to do is add value={} default attribute in the elements

# Child-to-parent Component Comunication

To comunicate child to parent, you should add a new prop on parent element, Naming convension - start with 'on'.

1. create a props in parent element. But dont call it here. Ex -
   <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />

2. Create a function for handler -
   const saveExpenseDataHandler = (enteredExpenseData) => {
   console.log(enteredExpenseData);
   };

3. Add props to child component. Ex -
   const ExpenseForm = (props)

4. call the handler in child to pass data to parent -
   props.onSaveExpenseData(userInput);

# Understanding "Keys"

React doesn't know any item, Keys help React identify which items have changed, are added, or are removed. Ex - key={item.id}

{props.items.map(item => (
<ExpenseItem
   key={item.id}
   title={item.title}
   amount={item.amount}
   date={item.date}
   />
))}

# Conditional Content

Check Expense.js and ExpenseList.js For example.

# Conditional Content - Assignment - 4

1. Click event - add new epxense
   ExpenseForm will be visible,
   Add Cancel Button to form - add eventlistner close the form without submitting

2. If new expense added then ExpenseForm will close

# Module 6 - Styling React Components

# Dynamic Inline Styles

<!-- Set state -->

const [isValid, setIsValid] = useState(true);

<!-- Change State to true / false - use logic -->

if (enteredValue.trim().length === 0) {
setIsValid(false);
return;
}

<!-- Dynamic inline Styles added -->

<label style={{color: !isvalid ? 'red' : 'black'}}>Course Goal</label>

# CSS Classes Dynamically

Should be implemented using useState.

<!-- Write CSS, class  -->

.form-control.invalid label {
color: red;
}

<!-- Add or remove class depending on State -->
<div className={`form-control ${!isValid ? 'invalid' : ''}`}>

# Introducing Styled Components

Same class name used for different component causes issue. 2 approch to solve the problem given bellow:

Approch 1 - Styled component
Approch 2 - CSS Modules

- Go to - https://styled-components.com/
- Install: npm install --save styled-components
- import styled from 'styled-components' where you want to use
- Syntax - const Button = styled.button``

  .button is html element, it could be any html tag.
  Put css code in Templete leteral ``. No de
  Ex - UI\Button.js

  For pseudo-class use &. Ex - &:focus. Details - CourseInput.js

# Styled Components & Dynamic Props

Approach 1 - Using className:

1. Import styled from 'styled-components'
2. Use syntax, const FormControl = styled.div`` // .div can be any HTML TAG!!

Check useState status and Include / remove className. Ex - CourseInput.js, line - <FormControl className={!isValid && 'invalid'}>

Approach 2 - Using props:

Props can be added to styled component - <FormControl invalid={!isValid}>

1. Import styled from 'styled-components'

2. Use syntax, const FormControl = styled.div`` // .div can be any HTML TAG!!

3. Use a props, pass useState, Ex - <FormControl invalid={!isValid}>

4. Use props in css, ${props => props.PropsName} -

   const FormControl = styled.div`
   margin: 0.5rem 0;

   & label {
   color: ${props => (props.invalid ? 'red' : 'black')};}

# Styled Components & Media Queries

Use media query directly in styled component.

@media (min-width: 768px){
width: auto;
}

# Using CSS Modules

Resource:

- https://create-react-app.dev/docs/adding-a-css-modules-stylesheet
- Button.js

1.  import the css file - import styles from './Button.module.css'; ( Need to add module.css in CSS File to use css module system.

2.  Add className to the component - .button in className is the class we import.
    <button type={props.type} className={styles.button} onClick={props.onClick}>
    {props.children}
    </button>

# Dynamic Styles with CSS Modules

1.  Import fileName.module.css

2.  Use CSS Modules <div className={styles['form-control']}>. Can be applied like this ['form-control']

3.  Use conditional css like this -

   <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>

# Module 7: Debugging React Apps

# Understanding React Error Messages

Working with Breakpoint need to practice again

# Module 8: Complete Practice Project

1.  Enter user info, added to successful new container

- Shows userName (## Years old)
- Reset the input

2.  If empty user, alert - enter valid name and age, alert closed by click okay button, or click out side / backdrop or press esc key

3.  negative age (-1), alert - please enter a valid age (< 1)

### Get input from a form in React

1.  Create a form and add onSubmit={} // addUserHandler, add handler at end, naming convension

2.  Create a function for form submision handler and preventdefault().
    const addUserHandler = event => {
    event.preventdefault();
    };

3.  Managing the user input State
    const [enteredUser, setEnteredUser] = useState({username: '', age: ''})

4.  Create props and function for every keystroke,

    - <input onChange={usernameChangeHandler} />
    - Send input through setState, setEnteredUser(prevAge => { return { ...prevAge,age: event.target.value };});

5.  Get submited value from current state. Ex - enteredUser

### Creating a Wrapper Component to overcome JSX Limitations

In a jsx sytex we can't place multiple elements without a parent container / component. Lets solve this issue -

1.  Custom Wrapper
2.  Empty Tag - <> </>
3.  React.Fragments
4.  React Portal

## Custom Wrapper

- create a custom component which contains {props.children}

## React.Fragments

- Use <React.Fragment></React.Fragment>, import React mandatory
- Use <Fragment></Fragment>, import directly as named import, import React, {Fragment} from 'react'

## ReactPortal

1. create
