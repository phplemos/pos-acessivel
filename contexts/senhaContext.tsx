import React, { createContext, useState } from 'react';

interface PasswordContextType {
    digito1: string;
    digito2: string;
    digito3: string;
    digito4: string;
}

const PasswordContext = createContext<PasswordContextType>({
    digito1: "",
    digito2: "",
    digito3: "",
    digito4: ""
});

interface PasswordProviderProps {
    children: React.ReactNode;
}

const PasswordProvider: React.FC<PasswordProviderProps> = ({children}) => {
    const [password, setPassword] = useState<PasswordContextType>({
        digito1: "2",
        digito2: "3",
        digito3: "4",
        digito4: "5"
    });
    
    const contextValue: PasswordContextType = password;

    return (
        <PasswordContext.Provider value={contextValue}>
            {children}
        </PasswordContext.Provider>);    

};


export {PasswordContext, PasswordContextType,PasswordProvider};