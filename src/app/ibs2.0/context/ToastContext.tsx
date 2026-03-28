"use client"

import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { Toast } from '../Components/toast/Index';

interface ToastContextType {
  showToast: (message: string, type: 'success' | 'error', duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

interface ToastProviderProps {
  children: ReactNode;
}

interface ToastState {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toast, setToast] = useState<ToastState>({
    message: '',
    type: 'success',
    isVisible: false
  });

  const showToast = (message: string, type: 'success' | 'error', duration = 4000) => {
    setToast({
      message,
      type,
      isVisible: true
    });

    setTimeout(() => {
      setToast(prev => ({ ...prev, isVisible: false }));
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast.isVisible && (
        <Toast 
          message={toast.message} 
          type={toast.type}
        />
      )}
    </ToastContext.Provider>
  );
};
