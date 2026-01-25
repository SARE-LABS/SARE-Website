"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type RegistrationContextType = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const RegistrationContext = createContext<RegistrationContextType>({
  open: true,
  setOpen: () => {},
});

export const RegistrationProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(true);
  return (
    <RegistrationContext.Provider value={{ open, setOpen }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => useContext(RegistrationContext);
