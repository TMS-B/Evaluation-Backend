import { useState, useRef } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
const VITE_SITE_KEY = import.meta.env.VITE_SITE_KEY;

const Login = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setName] = useState("");
  const recaptchaRef = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();

    const captchaValue = recaptchaRef.current?.getValue();

    if (!captchaValue) {
      alert("Please verify the recaptcha!");
      return;
    }

    const response = await axios.post(
      "http://localhost:3030/api/users/login",
      { email, password, captchaValue },
      { withCredentials: true }
    );

    if (response.data.success) {
      setIsAuth(true);
    }
  };

  return (
    <div>
      <h1>Sign in</h1>
      <form onSubmit={submitForm}>
        <input
          name="Email"
          type={"email"}
          value={email}
          required
          placeholder="joe@example.com"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          name="Password"
          type={"password"}
          value={password}
          required
          placeholder="******"
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Sign in</button>
        <ReCAPTCHA sitekey={VITE_SITE_KEY} ref={recaptchaRef} />
      </form>
      {isAuth && <h1>Successfully authenticated!</h1>}
    </div>
  );
};

export default Login;
