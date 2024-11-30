import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { reportFoundId } from "../service/ApiService";

const ReportFoundId = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    reporterName: "",
    idNumber: "",
    idName: "",
    phoneNumber: "",
    email: "",
    description: "",
    dateFound: "",
    locationFound: "",
  });

  const reportId = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await reportFoundId(formData);
      window.alert("ID reported successfully!");
      setFormData({
        reporterName: "",
        idNumber: "",
        idName: "",
        phoneNumber: "",
        email: "",
        description: "",
        dateFound: "",
        locationFound: "",
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
          Report a Found ID Card
        </h1>
        <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-lg mx-auto">
          <form onSubmit={reportId}>
            {/* Full Name */}
            <div className="mb-6">
              <label
                className="block font-semibold mb-2"
                htmlFor="reporterName"
              >
                Reporter Name
              </label>
              <input
                type="text"
                id="reporterName"
                name="reporterName"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                placeholder="Enter your name"
                value={formData.reporterName}
                onChange={(e) => {
                  setFormData((currentState) => ({
                    ...currentState,
                    reporterName: e.target.value,
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
                type="text"
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
            <div className="mb-6">
              <label className="block font-semibold mb-2" htmlFor="idName">
                ID Name
              </label>
              <input
                type="text"
                id="idName"
                name="idName"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                placeholder="Enter name on the ID"
                value={formData.idName}
                onChange={(e) => {
                  setFormData((currentState) => ({
                    ...currentState,
                    idName: e.target.value,
                  }));
                }}
                required
              />
            </div>

            {/* Contact Information */}
            <div className="mb-6">
              <label className="block font-semibold mb-2" htmlFor="phoneNumber">
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
            <div className="mb-6">
              <label className="block font-semibold mb-2" htmlFor="email">
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
                placeholder="Describe the found ID (e.g., color, name on the ID)"
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
              <label className="block font-semibold mb-2" htmlFor="dateFound">
                Date Found
              </label>
              <input
                type="date"
                id="dateFound"
                name="dateFound"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                value={formData.dateFound}
                onChange={(e) => {
                  setFormData((currentState) => ({
                    ...currentState,
                    dateFound: e.target.value,
                  }));
                }}
                required
              />
            </div>

            {/* Location Lost */}
            <div className="mb-6">
              <label
                className="block font-semibold mb-2"
                htmlFor="locationFound"
              >
                Location Found
              </label>
              <input
                type="text"
                id="locationFound"
                name="locationFound"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                placeholder="Where did you find it?"
                value={formData.locationFound}
                onChange={(e) => {
                  setFormData((currentState) => ({
                    ...currentState,
                    locationFound: e.target.value,
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

export default ReportFoundId;
