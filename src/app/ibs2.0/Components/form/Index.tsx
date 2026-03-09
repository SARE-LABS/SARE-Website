"use client"

import { useState, useEffect } from "react";
import InputField from "./Input";
import { useModal } from "../../context/ModalContext";
import { useToast } from "../../context/ToastContext";

export const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const { isModalOpen, closeModal } = useModal();
  const { showToast } = useToast();

  // Your Google Apps Script Web App URL
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwFTAvgJTvXSjX9HV8lYDAQSbtl0pS_F1hu7ZwFPYPhHP42rMF1U9UfDSB_jkxbS5ssKg/exec';

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
    }
  }, [isModalOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      closeModal();
    }, 300); 
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const validate = () => {
    const newErrors = { fullName: "", email: "", phone: "" };
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const inputFields = [
    {
      label: "Full name",
      placeholder: "Type in your fullname",
      name: "fullName",
      value: formData.fullName,
      error: errors.fullName,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formData, fullName: e.target.value }),
      type: "text",
    },
    {
      label: "Email",
      placeholder: "Type in your Email address",
      name: "email",
      value: formData.email,
      error: errors.email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formData, email: e.target.value }),
      type: "email",
    },
    {
      label: "Phone number",
      placeholder: "Type in your Phone number",
      name: "phoneNumber",
      value: formData.phone,
      error: errors.phone,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formData, phone: e.target.value }),
      type: "tel",
    },
  ];

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validate()) {
    showToast("Please fix the errors above", "error");
    return;
  }

  setIsSubmitting(true);

  try {
    const submitData = new FormData();
    submitData.append('fullName', formData.fullName);
    submitData.append('email', formData.email);
    submitData.append('phoneNumber', formData.phone);

    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      body: submitData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Response:", data);

    if (data.result === "success") {
      showToast(
        "Registration successful! You will receive a confirmation email shortly.",
        "success"
      );
      setFormData({ fullName: "", email: "", phone: "" });
      setErrors({ fullName: "", email: "", phone: "" });
      setTimeout(() => handleClose(), 2000);
    } else {
      showToast(
        `Registration failed: ${data.message || "Please try again later."}`,
        "error"
      );
    }
  } catch (error) {
    console.error("Error:", error);
    showToast(
      "Something went wrong! Please check your connection and try again.",
      "error"
    );
  } finally {
    setIsSubmitting(false);
  }
};


  if (!isModalOpen) return null;
  
  return (
    <div 
      className={`w-full h-screen flex justify-center items-center bg-black/40 fixed top-0 z-50 transition-opacity duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`relative flex flex-col items-center bg-[#FFFFFF] rounded-2xl shadow-lg w-[90%] md:w-[30%] p-8 transform transition-all duration-300 ease-out ${
          isAnimating 
            ? 'translate-y-0 scale-100 opacity-100' 
            : 'translate-y-8 scale-95 opacity-0'
        }`}
      >
        
        <button onClick={handleClose} className="bg-[#FFFFFF] font-bold rounded-full w-10 h-10 flex items-center justify-center absolute top-2 cursor-pointer shadow-xl">
          ✕
        </button>

        <h2 className="text-2xl font-medium text-center  before:w-[75%] md:before:w-[120%] flex justify-center before:h-[4px] before:rounded-full before:bg-[#67B5DC] relative before:absolute before:top-[100%] mt-8">Register</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4 w-full">
          {inputFields.map((field, index) => (
            <div key={index}>
              <InputField
                label={field.label}
                placeholder={field.placeholder}
                type={field.type}
                name={field.name}
                value={field.value}
                onChange={field.onChange}
              />
              {field.error && (
                <p className="text-[#EF4444] text-sm mt-1">{field.error}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#67B5DC] hover:bg-[#5BA7CE] text-[#FFFFFF] py-3 rounded-full flex items-center justify-center gap-2 font-medium disabled:opacity-70 transition-all mt-8"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-[#FFFFFF]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Submitting...
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11 3.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5m-4 9.5A3.75 3.75 0 0 0 3.25 17v1.188c0 .754.546 1.396 1.29 1.517c4.278.699 8.642.699 12.92 0a1.54 1.54 0 0 0 1.29-1.517V17A3.75 3.75 0 0 0 15 13.25h-.34q-.28.001-.544.086l-.866.283a7.25 7.25 0 0 1-4.5 0l-.866-.283a1.8 1.8 0 0 0-.543-.086zm12.5-7a.75.75 0 0 1 .75.75v1.75H22a.75.75 0 0 1 0 1.5h-1.75V12a.75.75 0 0 1-1.5 0v-1.75H17a.75.75 0 0 1 0-1.5h1.75V7a.75.75 0 0 1 .75-.75"
                  />
                </svg>
                Register
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};