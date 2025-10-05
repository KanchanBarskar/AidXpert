"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser, setIsAuthenticated, setToken } from "@/redux/features/userSlice";
import Footer from "../layout/Footer";
import Header from "../layout/Header";


const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      let response, data;
      if (showPhoneInput) {
        response = await fetch("https://aidxpert-backend-api-uat.onrender.com/api/v1/auth/phone", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phoneNo: phone, password }),
        });
      } else {
        response = await fetch("https://aidxpert-backend-api-uat.onrender.com/api/v1/auth/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
      }
      data = await response.json();
      if (response.ok && data.status) {
        dispatch(setUser(data.user));
        dispatch(setIsAuthenticated(true));
        dispatch(setToken(data.token));
        if (Number(data.user?.role_id) === 2) {
          router.replace("users/doctor/dashboard");
        } else {
          router.replace("users/patient/dashboard");
        }
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-body">
      <div className="main-wrapper">
        <Header />
    <div className="login-content-info">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="account-content">
              <div className="login-shapes">
                <div className="shape-img-left">
                  <img src="/img/shape-01.png" alt="" width={60} height={60} />
                </div>
                <div className="shape-img-right">
                  <img src="/img/shape-02.png" alt="" width={60} height={60} />
                </div>
              </div>
              <div className="account-info">
                <div className="login-back">
                  <a href="/"><i className="fas fa-arrow-left-long"></i> Back</a>
                </div>
                <div className="login-title">
                  <h3>Sign in</h3>
                  <p>We'll send a confirmation code to your email.</p>
                  {!showPhoneInput ? (
                    <span>
                      Sign in with{' '}
                      <a href="#" onClick={e => {e.preventDefault(); setShowPhoneInput(true);}}>Phone Number</a>
                    </span>
                  ) : (
                    <span>
                      Sign in with{' '}
                      <a href="#" onClick={e => {e.preventDefault(); setShowPhoneInput(false);}}>Email</a>
                    </span>
                  )}
                </div>
                <form onSubmit={handleSubmit}>
                  {!showPhoneInput && (
                    <div className="form-group">
                      <label>E-mail</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="example@email.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  )}
                  {showPhoneInput && (
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        className="form-control form-control-lg group_formcontrol"
                        id="phone"
                        name="phone"
                        type="text"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                      />
                    </div>
                  )}
                  <div className="form-group">
                    <div className="form-group-flex">
                      <label>Password</label>
                      <a href="forgot-password.html" className="forgot-link">Forgot password?</a>
                    </div>
                    <div className="pass-group">
                      <input
                        type="password"
                        className="form-control pass-input"
                        placeholder="*************"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                      />
                      <span className="feather-eye toggle-password"></span>
                    </div>
                  </div>
                  <div className="form-group form-check-box">
                    <div className="form-group-flex">
                      <label className="custom_check d-inline-flex"> Remember Me
                        <input type="checkbox" name="login" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="custom_check d-inline-flex"> Login with OTP
                        <input type="checkbox" name="login" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  {error && <div style={{ color: "red", marginBottom: 10 }}>{error}</div>}
                  <div className="form-group">
                    <button className="btn btn-block" type="submit">Sign in</button>
                  </div>
                  <div className="login-or">
                    <span className="or-line"></span>
                    <span className="span-or">or</span>
                  </div>
                  {/*
                  <div className="social-login-btn">
                    <button
                      type="button"
                      className="btn btn-block"
                      onClick={() => signIn("google")}
                    >
                      <img src="/img/icons/google-icon.svg" alt="" width={20} height={20} /> Log in with Google
                    </button>
                  </div>
                  */}
                  <div className="account-signup">
                    <p>Don't have an account ? <a href="/signUp">Sign up</a></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
    </div>
  );
};

export default Login;