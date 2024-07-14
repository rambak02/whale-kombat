import React, { createContext, useState, useEffect, ReactNode } from "react";

interface LoadingContextProps {
    isLoading: boolean;
    loadingProgress: number;
    incrementProgress: () => void;
}

export const LoadingContext = createContext<LoadingContextProps | null>(null);


export const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const totalTasks = 4;

    useEffect(()=> {
        if (loadingProgress >= totalTasks) {
                setTimeout(() => {
                    setIsLoading(false);
                }, 300)
            
        }
    }, [loadingProgress])

    const incrementProgress = () => {
        setLoadingProgress(prev => prev + 1);
    }

    return (
        <LoadingContext.Provider value = {{ isLoading, loadingProgress: (loadingProgress /totalTasks) * 100, incrementProgress }}>{children}</LoadingContext.Provider>
    )
};