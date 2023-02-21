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

## 