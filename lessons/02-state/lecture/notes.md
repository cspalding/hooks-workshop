we like declarative code over imperative code
we still need imperative code _somewhere_ down the line, but our top-level API should be declarative

## useState Hook
first hook we talk about is useState
in setMinutes in our useState hook, react does  something like the following
the following is basically what React is doing behind the scenes

```jsx
const el = Minutes()
renderInitially(el)

function setMinutes() {
  const  newEl = Minutes();
  const diff = compare(el, newEl)
  commit(diff)
}
```

in react we think about state first and then hook it up to a listener later on
in react: anything ever happens, setState

## Phony Hooks
let's take a look at how react might implement the useState hook
```jsx
const states = [] // <- this concept in hooks is why we don't need this.state anymore
let callCount = -1

function useState(initialValue) {
  const id = ++callCount

  if(states[id]) {
    return states[id]
  }

  const setValue = (newValue) => {
    states[id][0] = newValue
    renderPhonyHooks()
  }

  const tuple  = [initialValue, setValue]
  states.push(tuple)

  return tuple
}

function renderPhonyHooks() {
  callCount = -1 //reset call count so we can find out states in the right order
  ReactDOM.render(<Minutes />, document.getElementById("root"))
}
```