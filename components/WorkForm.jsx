"use client";

import { useState } from "react";

export default function WorkForm() {
  const [formData, setFormData] = useState({
    serviceNameId: "",
    cost: "",
    customerId: "",
    deliveryDate: "",
    status: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.cost) newErrors.cost = "cost is required";
    if (!formData.deliveryDate) newErrors.deliveryDate = "Delivery is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch("/api/works/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message);
        setErrorMessage("");
        setFormData({
          serviceNameId: "",
          cost: "",
          customerId: "",
          deliveryDate: "",
          status: "",
        });
      } else {
        setErrorMessage(data.message);
        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage("Failed to Add");
      setSuccessMessage("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Register</h2>
      {successMessage && <p className="text-green-600">{successMessage}</p>}
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>service Name</label>
          <input
            type="text"
            name="serviceNameId"
            value={formData.serviceNameId}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.serviceNameId && (
            <p className="text-red-600">{errors.serviceNameId}</p>
          )}
        </div>

        <div>
          <label>Customer</label>
          <textarea
            name="customerId"
            value={formData.customerId}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.customerId && (
            <p className="text-red-600">{errors.customerId}</p>
          )}
        </div>

        <div>
          <label>Cost</label>
          <input
            type="text"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.cost && <p className="text-red-600">{errors.cost}</p>}
        </div>
        <div>
          <label>Status</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.status && <p className="text-red-600">{errors.status}</p>}
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
