"use client";

import { redirect } from "next/navigation";
import { useState } from "react";

function RegisterCom() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    cpassword: "",
    terms: false,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.cpassword) {
      newErrors.cpassword = "Confirm password is required";
    } else if (formData.password !== formData.cpassword) {
      newErrors.cpassword = "Passwords do not match";
    }

    if (!formData.terms) {
      newErrors.terms = "You must accept the terms";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch("/api/user/new", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setSuccessMessage(data.message);
          setErrorMessage("");
          setFormData({ email: "", password: "", cpassword: "", terms: false });
          redirect("/auth/login");
        } else {
          setErrorMessage(data.message);
          setSuccessMessage("");
        }
      } catch (error) {
        setErrorMessage("Failed to register");
        setSuccessMessage("");
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center font-[sans-serif] sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <div className="text-center mb-12">
          <a href="/dashboard">
            <h2 className="text-gray-800 text-center text-3xl uppercase mb-4 font-bold">
              Mk Work Management
            </h2>
          </a>
          {successMessage && <p className="text-green-600">{successMessage}</p>}
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Email Id
              </label>
              <input
                name="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                className={`text-gray-800 bg-white border w-full text-sm px-4 py-3 rounded-md ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className={`text-gray-800 bg-white border w-full text-sm px-4 py-3 rounded-md ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Confirm Password
              </label>
              <input
                name="cpassword"
                type="password"
                value={formData.cpassword}
                onChange={handleChange}
                className={`text-gray-800 bg-white border w-full text-sm px-4 py-3 rounded-md ${
                  errors.cpassword ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter confirm password"
              />
              {errors.cpassword && (
                <p className="text-red-500 text-sm mt-1">{errors.cpassword}</p>
              )}
            </div>
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={formData.terms}
                onChange={handleChange}
                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="terms"
                className="text-gray-800 ml-3 block text-sm"
              >
                I accept the{" "}
                <a
                  href="javascript:void(0);"
                  className="text-blue-600 font-semibold hover:underline ml-1"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-sm mt-1">{errors.terms}</p>
            )}
          </div>
          <div className="!mt-12">
            <button
              type="submit"
              className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Create an account
            </button>
          </div>
          <p className="text-gray-800 text-sm mt-6 text-center">
            Already have an account?{" "}
            <a
              href="/auth/login"
              className="text-blue-600 font-semibold hover:underline ml-1"
            >
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterCom;
