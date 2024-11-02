"use client";

import { useState, useEffect } from 'react';
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'; 
import Image from 'next/image';
import googleIcon from '@/public/assets/google-icon.webp';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';


export const Register = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '' 
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Using useEffect to set error from searchParams
  useEffect(() => {
    const errorData = searchParams.get('error');
    if (errorData) {
      setError(errorData);
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const validateForm = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (!form.name) {
      return "Name is required.";
    }
    if (!form.email) {
      return "Email is required.";
    }
    if (!emailRegex.test(form.email)) {
      return "Provide a valid email address.";
    }
    if (!form.password) {
      return "Password is required.";
    }
    if (form.password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    if (form.password !== form.confirmPassword) {
      return "Passwords do not match.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        password: form.password 
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    if (data.message === "Verification code sent") {
      setSuccess(data.message);
      setTimeout(() => {
        localStorage.setItem("userEmail", form.email);
        router.push("/auth/verify");
      }, 5000);
    } else {
      setError(data.error);
    }
  };

  const handleGoogleSignIn = async () => {
    
  };

  return (
    <section className="flex flex-col md:flex-row h-screen items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg w-full md:w-1/2 xl:w-1/3 p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Your Account</h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {success && <div className="text-green-500 text-center mb-4">{success}</div>}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="relative">
            <label htmlFor="register-name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="register-name"
                type="text"
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="John Doe"
                required
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="relative">
            <label htmlFor="register-email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="register-email"
                type="email"
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="you@example.com"
                required
                value={form.email}
                name="email"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative">
            <label htmlFor="register-password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="register-password"
                type={showPassword ? 'text' : 'password'}
                className="w-full pl-10 pr-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="••••••••"
                required
                value={form.password}
                name="password"
                onChange={handleChange}
              />
              {/* Toggle Password Visibility */}
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="confirm-password"
                type={showConfirmPassword ? 'text' : 'password'}
                className="w-full pl-10 pr-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="••••••••"
                required
                value={form.confirmPassword}
                name="confirmPassword"
                onChange={handleChange}
              />
              {/* Toggle Confirm Password Visibility */}
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black hover:bg-[#FA9090] text-white py-3 rounded-lg font-semibold transition ease-in-out duration-300"
          >
            Register
          </button>

          {/* Google Authentication */}
          <div className="text-center mt-2">
            <p className="text-sm text-gray-500">Or sign up with</p>
            <button
              type="button"
              className="mt-2 w-full bg-white border border-gray-300 py-2 rounded-lg text-gray-700 flex justify-center items-center hover:bg-gray-100 transition ease-in-out duration-300"
              onClick={handleGoogleSignIn}
            >
              <Image src={googleIcon} alt="Google" className="w-6 h-6 mr-2" /> Continue with Google
            </button>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              Already have an account? <Link href="/auth/signin" className="text-primary font-medium">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
