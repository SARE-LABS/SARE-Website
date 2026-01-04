"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const CheckCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 12l2 2 4-4" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

const XCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15 9l-6 6M9 9l6 6" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

type ToastProps = {
  open: boolean;
  type?: "success" | "error";
  message: string;
  onClose?: () => void;
};

export default function Toast({ open, type = "success", message, onClose }: ToastProps) {
  const bgColor = type === "success" ? "bg-green-50" : "bg-red-50";
  const borderColor = type === "success" ? "border-green-200" : "border-red-200";
  const textColor = type === "success" ? "text-green-900" : "text-red-900";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          className={`fixed bottom-6 right-6 w-[320px] z-50 ${bgColor} border ${borderColor} shadow-lg rounded-[12px] p-4 flex items-start gap-3`}
          role="status"
        >
          <div className="shrink-0 mt-1">
            {type === "success" ? (
              <CheckCircle className={`w-6 h-6 ${textColor}`} />
            ) : (
              <XCircle className={`w-6 h-6 ${textColor}`} />
            )}
          </div>

          <div className="flex-1">
            <p className={`font-medium ${textColor}`}>{message}</p>
          </div>

          <button
            aria-label="close"
            onClick={onClose}
            className={`text-sm text-gray-500 hover:text-gray-700 ml-2`}
          >
            Close
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
