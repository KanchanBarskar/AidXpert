"use client";
import Image from "next/image";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type SessionUser = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role_id?: string | null;
};

type SessionType = {
  user?: SessionUser;
  [key: string]: any;
};

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const { data: session, status: sessionStatus } = useSession() as { data: SessionType | null, status: string };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
     if (sessionStatus === "authenticated") {
      console.log("User is authenticated");
      console.log("Session data:", session);
    if (Number(session?.user?.role_id) === 2) {
        router.replace("users/doctor/dashboard");
      } else {
        router.replace("users/patient/dashboard");
      }
  }
  }, [sessionStatus,session, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.error) {
      setError("Invalid email or password");
    }

    console.log("SignIn response:", res);
  };

  return (
    <div className="login-content-info">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="account-content">
              <div className="login-shapes">
                <div className="shape-img-left">
                  <Image src="/img/shape-01.png" alt="" width={60} height={60} />
                </div>
                <div className="shape-img-right">
                  <Image src="/img/shape-02.png" alt="" width={60} height={60} />
                </div>
              </div>
              <div className="account-info">
                <div className="login-back">
                  <a href="/"><i className="fas fa-arrow-left-long"></i> Back</a>
                </div>
                <div className="login-title">
                  <h3>Sign in</h3>
                  <p>We'll send a confirmation code to your email.</p>
                  <span>Sign in with <a href="login-phone.html">Phone Number</a></span>
                </div>
                <form onSubmit={handleSubmit}>
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
                  <div className="social-login-btn">
                    <button
                      type="button"
                      className="btn btn-block"
                      onClick={() => signIn("google")}
                    >
                      <Image src="/img/icons/google-icon.svg" alt="" width={20} height={20} /> Log in with Google
                    </button>
                  </div>
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
  );
};

export default Login;