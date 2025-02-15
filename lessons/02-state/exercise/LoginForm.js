import React, { useState } from "react"
import VisuallyHidden from "@reach/visually-hidden"
import { FaSignInAlt } from "react-icons/fa"
import TabsButton from "app/TabsButton"
import { login } from "app/utils"

// import LoginFormFinal from './LoginForm.final'
// export default LoginFormFinal

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      setLoading(true)
      const [emailNode, pwNode] = e.target.elements
      login(emailNode.value, pwNode.value)
        .then(() => setLoading(false))
        .catch((e) => {
          setError(`sorry we ran into an error: ${e.message}`)
          setLoading(false)
        })
      }}>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <VisuallyHidden>
        <label htmlFor="login:email">Email:</label>
      </VisuallyHidden>
      <input
        type="text"
        id="login:email"
        className="inputField"
        placeholder="you@example.com"
      />

      <VisuallyHidden>
        <label htmlFor="login:password">Password:</label>
      </VisuallyHidden>
      <input
        id="login:password"
        type={showPassword ? 'text' : 'password'}
        className="inputField"
        placeholder="Password"
      />

      <div>
        <label>
          <input
            className="passwordCheckbox"
            type="checkbox"
            defaultChecked={showPassword}
            onChange={() => {
              setShowPassword(!showPassword) 
            }
            }
          />{" "}
          show password
        </label>
      </div>

      <TabsButton>
        <FaSignInAlt />
        <span>{loading ? 'Loading' : 'Login'}</span>
      </TabsButton>
    </form>
  )
}
