import React from 'react';
import ReactDOM from 'react-dom';
import { FaHome } from 'react-icons/fa';

// React is how we describe a UI
// ReactDOM is how we actually render the elements
// JSX is nice but really it's just syntactic sugar
//   Actually just JavaScript behind the scenese
function CTAButton(props) {
  return (
    <button onClick={props.onClick}>
      {props.children}
    </button>
  )
}

const reactElement = (
  // totally irrelevant that this prop is called onClick.
  <CTAButton onClick={() => alert("howdy")}>
    <FaHome/> home
  </CTAButton>
)

// e.key === "Enter" instead of e.keyCode === 13