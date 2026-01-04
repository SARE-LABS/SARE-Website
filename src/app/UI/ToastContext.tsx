"use client";
import React, { createContext, useContext, useState } from "react";
import Toast from "./Toast";

type ToastType = "success" | "error";

type ToastContextType = {
  showToast: (type: ToastType, message: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<ToastType>("success");
  const [message, setMessage] = useState("");

  const showToast = (t: ToastType, msg: string) => {
    setType(t);
    setMessage(msg);
    setOpen(true);
    // auto close after 4s
    setTimeout(() => setOpen(false), 4000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast open={open} type={type} message={message} onClose={() => setOpen(false)} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    return {
      showToast: (type: ToastType, message: string) => {
        if (typeof window !== "undefined") {
          // fallback for places outside provider
          // keep it simple: use alert as fallback
          // eslint-disable-next-line no-alert
          window.alert(message);
        }
      },
    };
  }
  return ctx;
};

export default ToastContext;
