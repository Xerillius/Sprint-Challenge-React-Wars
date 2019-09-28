# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a javascript library and it attempts to solve the problem of dynamically updating and manipulating the DOM without having to perform page refreshes.

For example, every time the state of a component is updated it will re-render itself on the page.

1. What does it mean to think in react?

1. Describe state.

state is data displayed by components

1. Describe props.

props are variables passed down from parent to child components.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

side effects happen when a function alters something outside of its scope. you can use the useEffect hook to watch for changes in state and update the DOM accordingly.