# 20. React
## 20.1 Introduction to React
- props are short for properties.
- They’re JSON objects with key-value pairs.
- It’s all about components.
- It’s easier to test. Modular code.
- Bugs are isolated.
- React uses a virtual DOM to improve performance.
- React only updates the elements that changed, not the entire DOM.
- This process is called reconciliation.
- The virtual DOM is store in memory.
- We’ll need Babel and Webpack (tooling).

### Create React App
- 

### Render Element
- With JSX, you can only return one parent element as a component.

### JSX Expressions
You can call functions within JSX.
- You can do any JS in JSX. Just wrap it with curly braces (`{}`).
- But it’s better to put JS outside and then pass it to the component.

```
import React from "react"

const firstName = "Christian"

export default function Display() {
	return (
		<div>
			{/* This is how you do a comment. */}
			<p>Some JSX goes here.</p>
			<p>Hi, my name is {name}!</p>
		</div>
	)
}
```

### Props
- You can pass props into a component.
- You pass props from a parent to a child.
- You give the component the `props` argument.

```
import React from "react"
import Alert from "./components/Alert"

export default function App() {
	return <Alert type={alertType} message={message} />
}
```

### Component
- You can create objects and pass to component.
- Or you can create the objects in the JSX itself.
- Remember to convert hyphenated words to camelcase (e.g. `fontFamily` not `font-family`).
- Remember, take a property and pass it to a child. The child takes it as an argument (pass like a variable), and is able to do something with it.
- When ever you iteratively generate something with React, you need to create a key and pass it a unique value. Otherwise, React throws a warning (or error?).

## Events, Forms, Fetching Data, and React Hooks
- People used to use Redux.
- Now, they use hooks.
- People use functional components now (rather than classes).

### State
- When you import React, you also need to bring in the hooks you’re going to use.
- Also, you import React, even though it’s not explicitly used. But it’s used to transpile JSX.
- The code that goes to the browser uses React.
- React hooks start with “use”.
- You can also write your own hooks.
- Hooks are designed to run and they keep their state.
- useState takes in an initial parameter.
- A component runs multiple times.
- useState only gets set the first time the component’s rendered. It can change to something else later, when it’s rendered again.
- With the below code, `setGreeting` is called to change.
- States keep a variable from changing (unless we want it to).
- JSX doesn’t have to be in the return.

```
function App() {
	return <Greeting />
}
```

```
import React, { useState } = from "react"

export default function Greeting() {
	const [greeting, setGreeting] = useState("Welcome!")
	
	return (
		<div className="">
			...
		</div>
	)
}
```

```
array.map((item) => {
	return <li>{student}</li>
})
```

### Event Handling
- Event handlers are properties.
- React events are similar to DOM events.
- You can also put anonymous functions in the JSX. Might be good practice to make the code more readable (otherwise, you have to find the callback).
- You can pass functions as props (not just variables).
- It’s good practice to deconstruct props in the child. For example, `function CardBody({ count, handleIncrement, handleDecrement })`.
- Components can have multiple relationships with different parents.

```
function handleClick(e) {
	// do something
}

return (
	<button onClick={handleClick}>Submit</buton>
)
```

### React Forms
- It’s uncommon to use forms the same way we did with vanilla JS.
- What do we use instead?

### Hooks useEffect
- It’s kind of complicated.
- This hook runs under certain conditions.
- It takes a second parameter.
- If the it’s empty (`[]`), it will never run again.
- The second parameter is something that is checked every time the component renders. If that value changes, what’s in `useEffect` runs.
- “Has the value changed?” If yes, run the code.
- You always want to pass the second parameter.
- It’s like a trigger.
- It always runs the first time.
- `useState` and `useEffect` work together.

### Fetching Data
- You can use fetch now, instead of axios (I think).
- React is one-way data binding.
- With inputs, you have to use `onChange` to update a field, or nothing will happen (see activity, line 32).
