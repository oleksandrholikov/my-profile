import {createContext, useContext, useState} from 'react';
import type {ReactNode} from 'react'

type SendEmailFormContextType = {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const SendEmailFormContext = createContext<SendEmailFormContextType | undefined>(undefined);

export const SendEmailFormProvider = ({children}: {children: ReactNode}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <SendEmailFormContext.Provider value={{isOpen, setIsOpen}}>
            {children}
        </SendEmailFormContext.Provider>
    );
}

export const useSendEmailForm = () => {
  const context = useContext(SendEmailFormContext);
  if (!context) {
    throw new Error("useSendSmsForm must be used within SendSmsFormProvider");
  }
  return context;
};