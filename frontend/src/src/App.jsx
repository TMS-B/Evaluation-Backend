import { useState, useRef } from 'react'
import './App.css'
import ReCAPTCHA from 'react-google-recaptcha'
const VITE_SITE_KEY = import.meta.env.VITE_SITE_KEY

function App() {
  const [email, setEmail] = useState('')
  const [password, setName] = useState('')
  const recaptcha = useRef(null);

  async function submitForm(event) {
    event.preventDefault()
    const captchaValue = recaptcha.current.getValue()
    if (!captchaValue) {
      alert('Please verify the recaptcha!')
    } else {
      const res = await fetch('http://localhost:3020/login', {
        method: 'POST',
        body: JSON.stringify({ captchaValue }),
        headers: {
          'content-type': 'application/json',
        },
      })
      const data = await res.json()

      if (data.success) {
        // make form submission
        alert('Form submission successful!')
      } else {
        alert('reCAPTCHA validation failed!')
      }
    }
  }
  return (
    <div>
      <h1>Sign up for Newsletter</h1>
      <form onSubmit={submitForm}>
        <input
          name="Email"
          type={'email'}
          value={email}
          required
          placeholder="joe@example.com"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          name="Password"
          type={'password'}
          value={password}
          required
          placeholder="******"
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Sign up</button>
        <ReCAPTCHA sitekey={VITE_SITE_KEY} />
      </form>
    </div>
  )
}

export default App;