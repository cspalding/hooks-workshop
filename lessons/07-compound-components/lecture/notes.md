## What is a Compound Component
A larger component made up of smaller components that work together.

Let's say we start with a tabs component that has a list of `tab`s in a `panel`. Over time more folks request additions to the `tab` API and the single component with both a `tab` and a `panel` becomes very complex. As the number of props grows we should think about decomposing components so that each component can take fewer props individually.

When we break components into smaller pieces it should allow end users to use them together in a more flexible way. When we break the big component up we'll probably find that we use the `children` prop a lot. It's fine to use that prop a lot as it allows a way for the user to specify exactly how they want their components to be rendered.

One downside here is that we might need to share state between components. We can use `createContext` to accomplish that goal.
```jsx
import { useContext, createContext } from 'react'
const Context = createContext()
```
We can think of our `Context` as a channel across which our components can communicate their state. In order to set up the channel correctly we would render our top-level component like this:
```jsx
function MyTopLevelComponent({ children }) {
  return (
    // The 'value' prop here is the only prop on the Provider component,
    // and we use it to declare the state that we want to broadcast on
    // the context we've created
    <Context.Provider value= {{someState, someStateSetter}}>
      <MyTopLevelComponent>{childen}</MyTopLevelComponent>
    </Context.Provider>
  )
}

function SomeNestedComponent({ children }) {
  const [someState, someStateSetter] = useContext(Context) //useContext is how we access the shared state.
  return (
    <div className="SomeNestedComponent">
      <h2 className={someState}></h2>
      <button onClick={() => someStateSetter('blah')}>
        Update some shared state
      </button>
    </div>
  )
}
```

We probably want our `Context`s to be private; the user shouldn't be able to mess with them as a part of our public API. The easiest way to keep the `Context` private is to _not_ `export` the `Context` object itself. We can, however, still `export` some piece of the shared state that might be useful for the user i.e.
```jsx
export function useSomeState() {
  return useContext(Context).someState;
}
```