"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Mail,
  Phone,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Loader2,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import InputField from "./Input";
import { registerParticipant } from "../../actions/registration";
import { useModal } from "../../context/ModalContext";
import { useToast } from "../../context/ToastContext";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
}

interface RegistrationSuccessData {
  id: string;
  email: string;
  fullName: string;
  emailSent?: boolean;
}

const initialFormState: FormState = {
  fullName: "",
  email: "",
  phone: "",
};

export const Form: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();
  const { showToast } = useToast();

  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] =
    useState<RegistrationSuccessData | null>(null);

  // Reset form when modal closes or opens fresh
  const handleClose = useCallback(() => {
    closeModal();
    // Delay resetting state slightly so exit animation plays smoothly
    setTimeout(() => {
      setFormData(initialFormState);
      setErrors({});
      setSuccessData(null);
      setIsSubmitting(false);
    }, 250);
  }, [closeModal]);

  // Handle ESC key press & body scroll locking
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isSubmitting) {
        handleClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, isSubmitting, handleClose]);

  // Live input validation & change handler
  const handleChange = (field: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    const trimmedName = formData.fullName.trim();
    if (!trimmedName) {
      newErrors.fullName = "Please enter your full name";
    } else if (trimmedName.length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }

    const trimmedEmail = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      newErrors.email = "Please enter your email address";
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = "Please enter a valid email address";
    }

    const trimmedPhone = formData.phone.trim();
    const phoneDigits = trimmedPhone.replace(/[\s\-\(\)\+]/g, "");
    if (!trimmedPhone) {
      newErrors.phone = "Please enter your phone number";
    } else if (
      phoneDigits.length < 7 ||
      phoneDigits.length > 16 ||
      !/^\d+$/.test(phoneDigits)
    ) {
      newErrors.phone = "Please enter a valid phone number (min 7 digits)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      showToast("Please review the errors in the form.", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await registerParticipant({
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
      });

      if (result.success) {
        showToast("Registration confirmed!", "success");
        setSuccessData({
          id: result.id || "SARE-CONFIRMED",
          email: formData.email.trim(),
          fullName: formData.fullName.trim(),
          emailSent: (result as any).emailSent,
        });
      } else {
        showToast(
          result.message ||
            "Registration could not be completed. Please try again.",
          "error"
        );
      }
    } catch (error) {
      console.error("Registration submission error:", error);
      showToast(
        "A network error occurred. Please check your connection and try again.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="registration-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop with modern blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={!isSubmitting ? handleClose : undefined}
            className="fixed inset-0 bg-gray-950/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 z-10"
          >
            {/* Header Ambient Glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-40 bg-gradient-to-b from-[#67B5DC]/30 to-transparent blur-2xl pointer-events-none" />

            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              disabled={isSubmitting}
              aria-label="Close modal"
              className="absolute right-4 top-4 z-20 flex size-9 items-center justify-center rounded-full bg-gray-100/80 text-gray-500 transition-all hover:bg-gray-200 hover:text-gray-900 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <X className="size-4.5" />
            </button>

            {/* Content Switcher: Success Screen vs. Form */}
            {successData ? (
              <div className="p-8 sm:p-10 flex flex-col items-center text-center">
                <h3
                  id="registration-title"
                  className="text-2xl font-bold tracking-tight text-gray-900"
                >
                  Registration Confirmed!
                </h3>
                <p className="mt-2 text-sm text-gray-600 max-w-sm">
                  Welcome aboard,{" "}
                  <strong className="text-gray-900">
                    {successData.fullName}
                  </strong>
                  . Your spot for The Grand Finale is secured.
                </p>
                {successData.emailSent && (
                  <p className="mt-1 text-xs text-emerald-600 font-medium">
                    A confirmation email was sent to {successData.email}
                  </p>
                )}

                {/* Registration ID Badge */}
                <div className="mt-5 w-full rounded-2xl bg-gray-50 border border-gray-100 p-4 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Registration ID
                      </span>
                      <p className="text-lg font-mono font-bold text-gray-900 tracking-wide mt-0.5">
                        {successData.id}
                      </p>
                    </div>
                    <div className="flex size-10 items-center justify-center rounded-xl bg-[#67B5DC]/15 text-[#3081AA]">
                      <Calendar className="size-5" />
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-gray-500 border-t border-gray-200/60 pt-2">
                    Please keep this ID handy for event check-in.
                  </p>
                </div>

                {/* Direct Action Links */}
                <div className="mt-5 flex flex-col gap-2.5 w-full">
                  <a
                    href="https://calendar.app.google/4dRGyvSUPPgvhMpAA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#67B5DC]/10 py-3 px-4 text-sm font-semibold text-[#3081AA] border border-[#67B5DC]/25 transition-all hover:bg-[#67B5DC]/20 active:scale-[0.99]"
                  >
                    <Calendar className="size-4" />
                    <span>Add to Google Calendar</span>
                    <ExternalLink className="size-3.5 opacity-60" />
                  </a>

                  <a
                    href="https://chat.whatsapp.com/J90Z22acjjK6MWWX8KPCaP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-50 py-3 px-4 text-sm font-semibold text-emerald-700 border border-emerald-200/80 transition-all hover:bg-emerald-100 active:scale-[0.99]"
                  >
                    <MessageCircle className="size-4" />
                    <span>Join WhatsApp Group</span>
                    <ExternalLink className="size-3.5 opacity-60" />
                  </a>
                </div>

                {/* Done Action Button */}
                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-3.5 px-5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-gray-800 active:scale-[0.99]"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="p-7 sm:p-9">
                {/* Modal Title & Subtitle */}
                <div className="flex flex-col items-center text-center">
                  <h2
                    id="registration-title"
                    className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
                  >
                    Reserve Your Seat
                  </h2>
                  <p className="mt-1.5 text-sm text-gray-500 max-w-sm">
                    Enter your details to receive your official registration
                    ticket and event calendar invite.
                  </p>
                </div>

                {/* Form Fields */}
                <form
                  onSubmit={handleSubmit}
                  className="mt-7 flex flex-col gap-4.5"
                >
                  <InputField
                    name="fullName"
                    label="Full Name"
                    placeholder="e.g. Nurain Bamidele"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    error={errors.fullName}
                    disabled={isSubmitting}
                    required
                    autoComplete="name"
                    icon={<User className="size-4.5" />}
                  />

                  <InputField
                    name="email"
                    label="Email Address"
                    type="email"
                    placeholder="nurainbamidele@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    error={errors.email}
                    disabled={isSubmitting}
                    required
                    autoComplete="email"
                    icon={<Mail className="size-4.5" />}
                  />

                  <InputField
                    name="phone"
                    label="Phone Number"
                    type="tel"
                    placeholder="+234 800 000 0000"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    error={errors.phone}
                    disabled={isSubmitting}
                    required
                    autoComplete="tel"
                    icon={<Phone className="size-4.5" />}
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#67B5DC] py-3.5 px-5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#5BA7CE] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#67B5DC]/30 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-4.5 animate-spin" />
                        <span>Reserving Your Seat...</span>
                      </>
                    ) : (
                      <>
                        <span>Complete Registration</span>
                        <ArrowRight className="size-4.5" />
                      </>
                    )}
                  </button>

                  {/* <p className="text-center text-xs text-gray-400 mt-1">
                    Free admission. Instant confirmation sent via email.
                  </p> */}
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
