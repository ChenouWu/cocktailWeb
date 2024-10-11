import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaSignInAlt, FaUserPlus } from "react-icons/fa";

// Button Component
const Button = ({ children, className = "", variant = "primary", ...props }) => {
  const baseStyles = "px-4 py-2 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-500"
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Input Component
const Input = ({ className = "", fullWidth = false, ...props }) => {
  return (
    <input 
      className={`px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    />
  );
};

// Label Component
const Label = ({ children, className = "", required = false, ...props }) => {
  return (
    <label 
      className={`block text-sm font-medium text-gray-700 ${className}`}
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isLogin ? "Sign in to your account" : "Create a new account"}
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            {!isLogin && (
              <div className="mb-4">
                <Label htmlFor="username" required>
                  Username
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    required
                    fullWidth
                    className="pl-10"
                    placeholder="Enter your username"
                  />
                </div>
              </div>
            )}
            <div className="mb-4">
              <Label htmlFor="email-address" required>
                Email address
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  fullWidth
                  className="pl-10"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="mb-4">
              <Label htmlFor="password" required>
                Password
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  fullWidth
                  className="pl-10"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </div>

          <div>
            <Button type="submit" variant="primary" className="w-full flex items-center justify-center">
              {isLogin ? (
                <>
                  <FaSignInAlt className="mr-2" />
                  Sign In
                </>
              ) : (
                <>
                  <FaUserPlus className="mr-2" />
                  Sign Up
                </>
              )}
            </Button>
          </div>
        </form>
        <div className="text-center">
          <Button onClick={toggleForm} variant="outline" className="flex items-center justify-center mx-auto">
            {isLogin ? (
              <>
                <FaUserPlus className="mr-2" />
                Don't have an account? Sign up
              </>
            ) : (
              <>
                <FaSignInAlt className="mr-2" />
                Already have an account? Sign in
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}