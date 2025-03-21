import { getRandomInt } from "@/utils/randomInteger";
import React, { createContext, useState } from "react";

interface PasswordContextType {
  digito1: string;
  digito2: string;
  digito3: string;
  digito4: string;
  randomNumber1: string;
  randomNumber2: string;
  randomNumber3: string;

}

const PasswordContext = createContext<PasswordContextType>({
  digito1: "",
  digito2: "",
  digito3: "",
  digito4: "",
  randomNumber1: "",
  randomNumber2: "",
  randomNumber3: "",
});


interface PasswordProviderProps {
  children: React.ReactNode;
}

const PasswordProvider: React.FC<PasswordProviderProps> = ({ children }) => {
  const [password, setPassword] = useState<PasswordContextType>({
    digito1: "2",
    digito2: "3",
    digito3: "4",
    digito4: "5",
    randomNumber1: "",
    randomNumber2: "",
    randomNumber3: "",
  });

  const contextValue: PasswordContextType = password;

  return (
    <PasswordContext.Provider value={contextValue}>
      {children}
    </PasswordContext.Provider>
  );
};

export { PasswordContext, PasswordContextType, PasswordProvider };
