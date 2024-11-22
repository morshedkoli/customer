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

  console.log(formData);
  const [isLoading, setLoading] = useState(true);

  const [serviceNames, setServiceNames] = useState();
  const [customers, setCustomers] = useState();

  useEffect(() => {
    fetch("/api/serviceName")
      .then((res) => res.json())
      .then((data) => {
        setServiceNames(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("/api/customer")
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
        setLoading(false);
      });
  }, []);

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
      const response = await fetch("/api/service/new", {
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
          birthDate: "",
          name: "",
          ref: "",
        });
      } else {
        setErrorMessage(data.message);
        setSuccessMessage("");
      }
    } catch (error) {
      console.log("error", error);
      setErrorMessage("Failed to Add");
      setSuccessMessage("");
    }
  };
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Register New Work Request</h2>
      {successMessage && <p className="text-green-600">{successMessage}</p>}
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>service Name</label>
          {/* <input
            type="text"
            name="serviceNameId"
            value={formData.serviceNameId}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          /> */}
          <select
            name="serviceNameId"
            id="serviceNameId"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option>Select a Service</option>
            {serviceNames?.map((serviceName) => (
              <option key={serviceName.id} value={serviceName.id}>
                {serviceName.name}{" "}
              </option>
            ))}
          </select>
          {errors.serviceNameId && (
            <p className="text-red-600">{errors.serviceNameId}</p>
          )}
        </div>

        <div>
          <label>Customer Name</label>
          {/* <input
            type="text"
            name="serviceNameId"
            value={formData.serviceNameId}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          /> */}
          <select
            name="customerId"
            id="customerId"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option>Select a Customer</option>
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

        <div>
          <label>Reference</label>
          <input
            type="text"
            name="ref"
            value={formData.ref}
            // defaultValue="nothing"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.ref && <p className="text-red-600">{errors.ref}</p>}
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

          <select
            name="status"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option>Select a Status </option>
            <option value="Agreement">Agreement</option>
            <option value="Submitted">Submitted</option>
            <option value=" Finger_Done"> Finger Done</option>
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
