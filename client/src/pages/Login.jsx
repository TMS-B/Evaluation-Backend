import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
const VITE_SITE_KEY = import.meta.env.VITE_SITE_KEY;
const VITE_API_URL = import.meta.env.VITE_API_URL;

const Login = () => {
  const [isCaptchaAllowed, setIsCaptchaAllowed] = useState(false);

  useEffect(() => {
    let retries = 0;
    const maxRetries = 10; // Stop after 10 seconds (10 * 500ms)

    const checkConsent = () => {
      if (window.tarteaucitron?.state?.recaptcha !== undefined) {
        setIsCaptchaAllowed(window.tarteaucitron?.state?.recaptcha);
      } else if (retries < maxRetries) {
        retries += 1; // Retry until maxRetries
        setTimeout(checkConsent, 500);
      } else {
        setIsCaptchaAllowed(false);
      }
    };

    checkConsent();
  }, []);

  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const recaptchaRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userIsAuthenticated = localStorage.getItem("isAuth") === "true";
    if (userIsAuthenticated) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    const captchaValue = recaptchaRef.current?.getValue();

    if (!captchaValue) {
      alert("Please verify the recaptcha!");
      setLoading(false);
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
      <form onSubmit={handleLogin}>
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

        {isCaptchaAllowed === null ? (
            <LoadingSpinner loading={true} isOverlay={false} />
          ) : isCaptchaAllowed ? (
            <ReCAPTCHA
              sitekey={VITE_SITE_KEY}
              ref={recaptchaRef}
            />
          ) : (
            <p>
              Veuillez autoriser les cookies.
            </p>
          )}

          <button type="submit" disabled={loading}>Se Connecter</button>
          {message && <p>{message}</p>}
          {loading && <LoadingSpinner loading={loading} isOverlay={true} />}  
      </form>
      {/* {isAuth && <h1>Successfully authenticated!</h1>} */}
    </div>
  );
};

export default Login;
