import React, { createContext, useState, useEffect, ReactNode } from "react";

interface LoadingContextProps {
    isLoading: boolean;
    loadingProgress: number;
    incrementProgress: () => void;
}

export const LoadingContext = createContext<LoadingContextProps | null>(null);


export const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const totalTasks = 4;

    useEffect(()=> {
        if (progress >= totalTasks) {
                setTimeout(() => {
                    setIsLoading(false);
                }, 300)
            
        }
    }, [progress])

    const incrementProgress = () => {
        setProgress(prev => prev + 1);
    }

    return (
        <LoadingContext.Provider value = {{ isLoading, loadingProgress: (progress /totalTasks) * 100, incrementProgress }}>{children}</LoadingContext.Provider>
    )
};