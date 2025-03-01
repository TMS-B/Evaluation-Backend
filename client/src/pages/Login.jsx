import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
const VITE_SITE_KEY = import.meta.env.VITE_SITE_KEY;
const VITE_API_URL = import.meta.env.VITE_API_URL;

const Login = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const recaptchaRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userIsAuthenticated = localStorage.getItem("isAuth") === "true";
    if (userIsAuthenticated) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const submitForm = async (e) => {
    e.preventDefault();

    const captchaValue = recaptchaRef.current?.getValue();

    if (!captchaValue) {
      alert("Please verify the recaptcha!");
      return;
    }
    try {
      
      const response = await axios.post(
        `${VITE_API_URL}/api/users/login`,
        { email, password, captchaValue },
        { withCredentials: true }
      );

      if (response.data.success) {
        localStorage.setItem("isAuth", "true");
        setIsAuth(true);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
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
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Sign in</button>
        <ReCAPTCHA sitekey={VITE_SITE_KEY} ref={recaptchaRef} />
      </form>
      {isAuth && <h1>Successfully authenticated!</h1>}
    </div>
  );
};

export default Login;
