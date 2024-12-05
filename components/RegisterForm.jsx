"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    balance: 0,
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "balance" ? parseFloat(value) || 0 : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone || !/^\d{10,15}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10-15 digits";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (isNaN(formData.balance) || formData.balance < 0)
      newErrors.balance = "Balance must be a positive number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    console.log("data submited");
    try {
      // Clear previous messages
      setErrorMessage("");
      setSuccessMessage("");

      const response = await fetch(process.env.HOST_URL + "/api/customer/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Check for network or server-level issues
      if (!response.ok) {
        // Attempt to parse JSON if the response body contains error details
        let errorData = {};
        try {
          errorData = await response.json();
        } catch {
          // If JSON parsing fails, provide a generic error message
          errorData.message = "An unexpected error occurred.";
        }
        setErrorMessage(errorData.message || `Error: ${response.statusText}`);
        return;
      }

      // Parse JSON and handle success
      const data = await response.json();
      setSuccessMessage(data.message || "Customer registered successfully.");
      setFormData({ name: "", phone: "", address: "", balance: 0 });
    } catch (error) {
      // Handle fetch errors (e.g., network issues, CORS errors)
      console.error("Fetch error:", error);
      setErrorMessage(
        "Failed to connect to the server. Please try again later."
      );
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Register Customer</h2>
      {successMessage && <p className="text-green-600">{successMessage}</p>}
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.name && <p className="text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.phone && <p className="text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.address && <p className="text-red-600">{errors.address}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Balance</label>
          <input
            type="number"
            name="balance"
            value={formData.balance}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.balance && <p className="text-red-600">{errors.balance}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}
