"use client";

import { useEffect, useState } from "react";

export default function WorkForm() {
  const [formData, setFormData] = useState({
    serviceNameId: "",
    cost: "",
    customerId: "",
    deliveryDate: "",
    status: "",
    name: "",
    birthDate: "",
    ref: "",
  });

  const [isLoading, setLoading] = useState(true);
  const [serviceNames, setServiceNames] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});

  // // Fetch Service Names and Customers
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const [serviceResponse, customerResponse] = await Promise.all([
  //         fetch(`${process.env.HOST_URL}/api/serviceName`),
  //         fetch(`${process.env.HOST_URL}/api/customer`),
  //       ]);
  //       const serviceData = await serviceResponse.json();
  //       const customerData = await customerResponse.json();

  //       setServiceNames(serviceData);
  //       setCustomers(customerData);
  //       setLoading(false); // Only set loading to false once both data are fetched
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       setErrorMessage("Failed to load data");
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form inputs
  // const validateForm = () => {
  //   const newErrors = {};

  //   if (!formData.serviceNameId)
  //     newErrors.serviceNameId = "Service name is required";
  //   if (!formData.customerId) newErrors.customerId = "Customer is required";
  //   if (!formData.name) newErrors.name = "Name is required";
  //   if (!formData.cost) newErrors.cost = "Cost is required";
  //   if (isNaN(formData.cost)) newErrors.cost = "Cost must be a number";
  //   if (!formData.deliveryDate)
  //     newErrors.deliveryDate = "Delivery date is required";
  //   if (!formData.status) newErrors.status = "Status is required";

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!validateForm()) return;
    console.log("data submited");
    // try {
    //   const response = await fetch(`http://localhost:3000/api/service/new`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });

    //   if (!response.ok) {
    //     // Handle non-200 responses without parsing JSON
    //     setErrorMessage(`Error: ${response.status} ${response.statusText}`);
    //     setSuccessMessage("");
    //     return;
    //   }

    //   const data = await response.json();

    //   setSuccessMessage(data.message || "Successfully added work request");
    //   setErrorMessage("");
    //   setFormData({
    //     serviceNameId: "",
    //     cost: "",
    //     customerId: "",
    //     deliveryDate: "",
    //     status: "",
    //     name: "",
    //     birthDate: "",
    //     ref: "",
    //   });
    // } catch (error) {
    //   console.log("Error:", error);
    //   setErrorMessage("Failed to add work request");
    //   setSuccessMessage("");
    // }
  };

  if (isLoading) return <p>Loading...</p>; // Loading indicator

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Register New Work Request</h2>

      {successMessage && <p className="text-green-600">{successMessage}</p>}
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Service Name Field */}
        <div>
          <label>Service Name</label>
          <select
            name="serviceNameId"
            value={formData.serviceNameId}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select a Service</option>
            {serviceNames?.map((serviceName) => (
              <option key={serviceName.id} value={serviceName.id}>
                {serviceName.name}
              </option>
            ))}
          </select>
          {errors.serviceNameId && (
            <p className="text-red-600">{errors.serviceNameId}</p>
          )}
        </div>

        {/* Customer Name Field */}
        <div>
          <label>Customer Name</label>
          <select
            name="customerId"
            value={formData.customerId}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select a Customer</option>
            {customers?.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
          {errors.customerId && (
            <p className="text-red-600">{errors.customerId}</p>
          )}
        </div>

        {/* Name Field */}
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

        {/* Cost Field */}
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

        {/* Birth Date Field */}
        <div>
          <label>Birth Date</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.birthDate && (
            <p className="text-red-600">{errors.birthDate}</p>
          )}
        </div>

        {/* Reference Field */}
        <div>
          <label>Reference</label>
          <input
            type="text"
            name="ref"
            value={formData.ref}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.ref && <p className="text-red-600">{errors.ref}</p>}
        </div>

        {/* Status Field */}
        <div>
          <label>Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select a Status</option>
            <option value="Agreement">Agreement</option>
            <option value="Submitted">Submitted</option>
            <option value="Finger_Done">Finger Done</option>
            <option value="Police_Report_Done">Police Report Done</option>
            <option value="BackEnd_Verification_Done">
              BackEnd Verification Done
            </option>
            <option value="Printing">Printing</option>
            <option value="Shipped">Shipped</option>
            <option value="Ready_For_Delivery">Ready For Delivery</option>
            <option value="Delivered">Delivered</option>
          </select>
          {errors.status && <p className="text-red-600">{errors.status}</p>}
        </div>

        {/* Delivery Date Field */}
        <div>
          <label>Delivery Date</label>
          <input
            type="date"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.deliveryDate && (
            <p className="text-red-600">{errors.deliveryDate}</p>
          )}
        </div>

        {/* Submit Button */}
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
