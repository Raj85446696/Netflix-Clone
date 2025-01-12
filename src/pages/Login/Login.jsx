import React, { useState } from 'react';
import '../Login/Login.css';
import logo from '../../assets/logo.png';
import { login, signup } from '../../../firebase.js';
import netflix_spinner from '../../assets/netflix_spinner.gif';

function Login() {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");

  const userAuth = async (event) => {
    event.preventDefault();
    setloading(true);
    setError(""); // Reset error
    try {
      const emailStr = String(email);
      const passwordStr = String(password);
      const nameStr = String(name);

      if (signState === "Sign In") {
        await login(emailStr, passwordStr);
      } else {
        await signup(nameStr, emailStr, passwordStr);
      }
    } catch (err) {
      setError(err.message || "Something went wrong!");
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className="login-spinner">
          <img src={netflix_spinner} alt="Loading..." />
        </div>
      ) : (
        <div className="login">
          <img src={logo} alt="login-logo" className="login-logo" />
          <div className="login-form">
            <h1>{signState}</h1>
            <form onSubmit={userAuth}>
              {signState === "Sign Up" && (
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  id="name"
                  value={name}
                  aria-label="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <input
                type="text"
                placeholder="Your Email"
                name="email"
                id="email"
                value={email}
                aria-label="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Your Password"
                name="password"
                id="password"
                value={password}
                aria-label="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">{signState}</button>
              {error && <p className="error-message">{error}</p>}
              <div className="form-help">
                <div className="remember">
                  <input type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <p>Need Help?</p>
              </div>
              <div className="form-switch">
                {signState === "Sign In" ? (
                  <p>
                    New to Netflix?{" "}
                    <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
                  </p>
                ) : (
                  <p>
                    Already Have Account?{" "}
                    <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
