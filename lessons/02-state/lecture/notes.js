import { isCompletionStatement } from "@babel/types";

// we like declarative code over imperative code
// we still need imperative code _somewhere_ down the line, but our top-level API should be declarative

// first hook we talk about is useState
// in setMinutes in our useState hook, react does  something like the following
// the following is basically what React is doing behind the scenes
const el = Minutes()
renderInitially(el)

function setMinutes() {
  const  newEl = Minutes();
  const diff = compare(el, newEl)
  commit(diff)
}

// in react we think about state first and then hook it up to a listener later on
// in react: anything ever happens, setState