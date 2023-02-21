import React, { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
// Exports the component so it’s available to the rest of the app.
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // Initially, it’s 0. When setCount is called, it changes.
  let [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  // Calls setCount and increments count by 1.
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  // Calls setCount and decrements count by 1.
  const handleDecrement = () => {
    setCount((count - 1));
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      {/* count, handleIncrement, and handleDecrement. */}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
