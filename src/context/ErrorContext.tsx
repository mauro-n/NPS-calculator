import { createContext, useState, useContext } from "react";

type ErrorContextType = {
    errors: string[],
    setErrors: React.Dispatch<React.SetStateAction<string[]>>
}

export const ErrorContext = createContext<ErrorContextType>({ errors: [], setErrors: () => {} });

export const useErrorContext = () => {
    return useContext(ErrorContext);
}

export const ErrorContextProvider = ({ children }: { children: React.ReactElement | null }) => {
    const [errors, setErrors] = useState<string[]>([]);
    return (
        <ErrorContext.Provider value={{ errors, setErrors }}>
            {children}
        </ErrorContext.Provider>
    )
}
