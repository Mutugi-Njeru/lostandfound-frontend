import React, { useState } from "react";
import { reportLostId } from "../service/ApiService";
import { useNavigate } from "react-router-dom";

const ReportLostId = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    idNumber: "",
    phoneNumber: "",
    email: "",
    description: "",
    dateLost: "",
    locationLost: "",
  });

  const reportId = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await reportLostId(formData);
      window.alert("ID reported successfully!");
      setFormData({
        fullName: "",
        idNumber: "",
        phoneNumber: "",
        email: "",
        description: "",
        dateLost: "",
        locationLost: "",
      });
      navigate("/");
    } catch (error) {
      console.error("Error reporting ID:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-500 via-red-500 to-black min-h-screen py-10 text-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          Report a Lost ID Card
        </h1>
        <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-lg mx-auto">
          <form onSubmit={reportId}>
            {/* Full Name */}
            <div className="mb-6">
              <label className="block font-semibold mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => {
                  setFormData((currentState) => ({
                    ...currentState,
                    fullName: e.target.value,
                  }));
                }}
                required
              />
            </div>

            {/* ID Number */}
            <div className="mb-6">
              <label className="block font-semibold mb-2" htmlFor="idNumber">
                ID Number
              </label>
              <input
                type="number"
                id="idNumber"
                name="idNumber"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                placeholder="Enter ID number"
                value={formData.idNumber}
                onChange={(e) => {
                  const value =
                    e.target.value === "" ? "" : Number(e.target.value); // Handle empty input
                  setFormData((currentState) => ({
                    ...currentState,
                    idNumber: value,
                  }));
                }}
                required
              />
            </div>

            {/* Phone Number */}
            <div className="mb-6">
              <label className="block font-semibold mb-2" htmlFor="contactInfo">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={(e) => {
                  setFormData((currentState) => ({
                    ...currentState,
                    phoneNumber: e.target.value,
                  }));
                }}
                required
              />
            </div>
            {/* email */}
            <div className="mb-6">
              <label className="block font-semibold mb-2" htmlFor="contactInfo">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => {
                  setFormData((currentState) => ({
                    ...currentState,
                    email: e.target.value,
                  }));
                }}
                required
              />
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block font-semibold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                placeholder="Describe the lost ID (e.g., color, name on the ID)"
                rows="4"
                value={formData.description}
                onChange={(e) => {
                  setFormData((currentState) => ({
                    ...currentState,
                    description: e.target.value,
                  }));
                }}
                required
              ></textarea>
            </div>

            {/* Date Lost */}
            <div className="mb-6">
              <label className="block font-semibold mb-2" htmlFor="dateLost">
                Date Lost
              </label>
              <input
                type="date"
                id="dateLost"
                name="dateLost"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                value={formData.dateLost}
                onChange={(e) => {
                  setFormData((currentState) => ({
                    ...currentState,
                    dateLost: e.target.value,
                  }));
                }}
                required
              />
            </div>

            {/* Location Lost */}
            <div className="mb-6">
              <label
                className="block font-semibold mb-2"
                htmlFor="locationLost"
              >
                Location Lost
              </label>
              <input
                type="text"
                id="locationLost"
                name="locationLost"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                placeholder="Where did you lose it?"
                value={formData.locationLost}
                onChange={(e) => {
                  setFormData((currentState) => ({
                    ...currentState,
                    locationLost: e.target.value,
                  }));
                }}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Report"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportLostId;
