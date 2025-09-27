
## What is JSX, and why is it used?
JSX (JavaScript XML) is a syntax extension for JavaScript used in React. It allows us to write HTML-like code directly in our JavaScript files. JSX makes it easier to visualize and create UI components by combining markup and logic in one place. Under the hood, JSX is transformed into React function calls (`React.createElement`).

## What is the difference between State and Props?
- **State** is data managed within a component. It can change over time and affects how the component renders and behaves.
- **Props** (short for "properties") are data passed from a parent component to a child component. Props are read-only and cannot be modified by the child.

## What is the useState hook, and how does it work?
The `useState` hook is a React function that lets us add state to functional components. It returns an array with two elements: the current state value and a function to update it.

**Example:**
```jsx
const [count, setCount] = useState(0);
```
- `count` is the state variable.
- `setCount` is the function to update `count`.

## How can you share state between components in React?
State can be shared between components by:
- **Lifting state up:** Move the state to a common parent component and pass it down as props.

## How is event handling done in React?
Event handling in React is done by passing event handler functions as props to elements. Handlers use camelCase naming and receive a synthetic event object.

**Example:**
```jsx
function MyButton() {
  function handleClick() {
    alert('Button clicked!');
  }
  return <button onClick={handleClick}>Click Me</button>;
}
```
