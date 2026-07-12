"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const router = useRouter();
  
  // Login State
  const [loginForm, setLoginForm] = useState({ identifier: "", password: "" });
  const [loginErrors, setLoginErrors] = useState({ identifier: "", password: "" });
  
  // Signup State
  const [signupForm, setSignupForm] = useState({ name: "", identifier: "", password: "" });
  const [signupErrors, setSignupErrors] = useState({ name: "", identifier: "", password: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;
    const errors = { identifier: "", password: "" };

    if (!loginForm.identifier) {
      errors.identifier = "Mobile Number or Email is required";
      isValid = false;
    }
    if (!loginForm.password) {
      errors.password = "Password is required";
      isValid = false;
    }

    setLoginErrors(errors);
    
    if (isValid) {
      alert("Login successful!");
      router.push("/");
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;
    const errors = { name: "", identifier: "", password: "" };

    if (!signupForm.name) {
      errors.name = "Full Name is required";
      isValid = false;
    }
    if (!signupForm.identifier) {
      errors.identifier = "Email or Mobile is required";
      isValid = false;
    }
    if (!signupForm.password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (signupForm.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setSignupErrors(errors);

    if (isValid) {
      alert("Account created successfully!");
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center py-10 px-margin-mobile flex-grow">
      <div className="w-full max-w-md bg-surface-container-lowest rounded-xl shadow-[0_8px_30px_rgba(121,89,0,0.05)] overflow-hidden">
        {/* Header / Logo */}
        <div className="bg-surface-container-low py-8 flex flex-col items-center justify-center border-b border-surface-variant">
          <img
            alt="Dhenuh Logo"
            className="w-32 h-32 object-contain mb-4"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuARTxe8d8XFnOP_fQDPGYRAqF6t-HifGz5ZT_L6ZD1IzvQIurQJ-5UJ3OVIesPSLtXqgDs_IAsTETGzQn5cVcP4GTqnDaJtltnohXr3900a9LFBRRgVvwH7kVxbZzFV-M3YGc4QGmPdWr7ww-X-4ikqlZQUhHSublS7dTonwBZWYkHpkmlXYlWp47J38wspsrsOEglA9rsxGs63GKDsf9av6bkAg5o0G2G3bB6Uw2PUmYSKS_-HNbU_v_lPnqYIOaf5OcA"
          />
          <h1 className="font-display-lg text-display-lg text-primary text-center">Dhenuh</h1>
          <p className="font-body-md text-body-md text-secondary mt-2">Sacred Nourishment</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-surface-variant">
          <button
            className={`flex-1 py-4 text-center font-title-md text-title-md focus:outline-none transition-colors ${
              activeTab === "login" ? "text-primary border-b-2 border-primary" : "text-on-surface-variant"
            }`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`flex-1 py-4 text-center font-title-md text-title-md focus:outline-none transition-colors ${
              activeTab === "signup" ? "text-primary border-b-2 border-primary" : "text-on-surface-variant"
            }`}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
        </div>

        {/* Form Container */}
        <div className="p-8">
          {/* Login Form */}
          {activeTab === "login" && (
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label className="block font-label-sm text-label-sm text-secondary mb-2 uppercase tracking-wide">Mobile Number or Email</label>
                <input
                  value={loginForm.identifier}
                  onChange={(e) => setLoginForm({...loginForm, identifier: e.target.value})}
                  className={`w-full bg-surface-bright border-b ${loginErrors.identifier ? 'border-error' : 'border-outline-variant'} focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md transition-colors placeholder:text-outline outline-none`}
                  placeholder="Enter your detail"
                  type="text"
                />
                {loginErrors.identifier && <p className="text-error text-xs mt-1">{loginErrors.identifier}</p>}
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block font-label-sm text-label-sm text-secondary uppercase tracking-wide">Password</label>
                  <Link className="font-label-sm text-label-sm text-primary hover:underline" href="#">Forgot?</Link>
                </div>
                <input
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                  className={`w-full bg-surface-bright border-b ${loginErrors.password ? 'border-error' : 'border-outline-variant'} focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md transition-colors placeholder:text-outline outline-none`}
                  placeholder="••••••••"
                  type="password"
                />
                {loginErrors.password && <p className="text-error text-xs mt-1">{loginErrors.password}</p>}
              </div>
              <button
                className="w-full bg-primary text-on-primary py-3 rounded-lg font-title-md text-title-md shadow-md hover:bg-surface-tint transition-all active:scale-[0.98]"
                type="submit"
              >
                Sign In
              </button>
            </form>
          )}

          {/* Sign Up Form */}
          {activeTab === "signup" && (
            <form className="space-y-6" onSubmit={handleSignup}>
              <div>
                <label className="block font-label-sm text-label-sm text-secondary mb-2 uppercase tracking-wide">Full Name</label>
                <input
                  value={signupForm.name}
                  onChange={(e) => setSignupForm({...signupForm, name: e.target.value})}
                  className={`w-full bg-surface-bright border-b ${signupErrors.name ? 'border-error' : 'border-outline-variant'} focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md transition-colors placeholder:text-outline outline-none`}
                  placeholder="Your full name"
                  type="text"
                />
                {signupErrors.name && <p className="text-error text-xs mt-1">{signupErrors.name}</p>}
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-secondary mb-2 uppercase tracking-wide">Email or Mobile Number</label>
                <input
                  value={signupForm.identifier}
                  onChange={(e) => setSignupForm({...signupForm, identifier: e.target.value})}
                  className={`w-full bg-surface-bright border-b ${signupErrors.identifier ? 'border-error' : 'border-outline-variant'} focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md transition-colors placeholder:text-outline outline-none`}
                  placeholder="Email or Mobile"
                  type="text"
                />
                {signupErrors.identifier && <p className="text-error text-xs mt-1">{signupErrors.identifier}</p>}
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-secondary mb-2 uppercase tracking-wide">Password</label>
                <input
                  value={signupForm.password}
                  onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                  className={`w-full bg-surface-bright border-b ${signupErrors.password ? 'border-error' : 'border-outline-variant'} focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md transition-colors placeholder:text-outline outline-none`}
                  placeholder="Create a password"
                  type="password"
                />
                {signupErrors.password && <p className="text-error text-xs mt-1">{signupErrors.password}</p>}
              </div>
              <button
                className="w-full bg-primary text-on-primary py-3 rounded-lg font-title-md text-title-md shadow-md hover:bg-surface-tint transition-all active:scale-[0.98]"
                type="submit"
              >
                Create Account
              </button>
            </form>
          )}

          {/* Social Login Divider */}
          <div className="mt-8 flex items-center justify-center space-x-4">
            <div className="h-px bg-outline-variant flex-1"></div>
            <span className="font-label-sm text-label-sm text-secondary uppercase">Or continue with</span>
            <div className="h-px bg-outline-variant flex-1"></div>
          </div>

          {/* Social Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="flex-1 py-3 px-4 flex items-center justify-center gap-2 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-on-surface-variant group-hover:text-primary transition-colors">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
                <line x1="21.17" y1="8" x2="12" y2="8"></line>
                <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
                <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
              </svg>
              <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">Google</span>
            </button>
            <button className="flex-1 py-3 px-4 flex items-center justify-center gap-2 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-on-surface-variant group-hover:text-primary transition-colors">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
