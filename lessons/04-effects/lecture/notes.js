// we think about react as doing 2 main things
// 1. managing state
// 2. managing side-effects

// pre React we used to think about keeping the DOM updated in terms of events
// With React we think about state instead of events.
// Thinking in terms of events leads to a lot more imperative code to deal with updating the DOM

// useEffect hook means "hey react, when renders make sure this side effect also happens"
// very similar  to useState. useState says "hold on to this information between renders"
// useEffect says "here's a function to run every time this component renders"
// useEffect runs right after first render

// standard use-cases include fetching data, persisting to local storage
// basically can use this to take care of any imperative parts/side-effects of your workflow
// it is worth noting that this hook will _always_ run on render
// can also pass a dependency array to useEffect so that it only runs if one of those
// dependencies has been updated
// without a dependencies array useEffect will always run
// we can think about useEffect as a "synchronizer" for our data.

// static analysis tools for hooks are available and pretty good; 
// they'll catch a lot of errors for us