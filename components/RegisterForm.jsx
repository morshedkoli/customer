"use client";

import { useState } from "react";

import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/BrowserOnlyComponent"),
  { ssr: false }
);

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

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone || !/^\d{10,15}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10-15 digits";
    if (!formData.address) newErrors.address = "Address is required";
    if (isNaN(formData.balance) || formData.balance < 0)
      newErrors.balance = "Balance must be a positive number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch(`${process.env.HOST_URL}/api/customer/new`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response?.ok) {
        setSuccessMessage(data.message || "error");
        setErrorMessage("");
        setFormData({ name: "", phone: "", address: "", balance: 0 });
      } else {
        setErrorMessage(data.message || "error");
        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage("Failed to register");
      setSuccessMessage("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Register Customer</h2>
      {successMessage && <p className="text-green-600">{successMessage}</p>}
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Name</label>
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
          <label>Phone</label>
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
          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.address && <p className="text-red-600">{errors.address}</p>}
        </div>

        <div>
          <label>Balance</label>
          <input
            type="text"
            name="balance"
            value={formData.balance}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.balance && <p className="text-red-600">{errors.balance}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}
