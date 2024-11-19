import { createContext } from "react";

// Define the interface for the context value
interface TotalUsageContextType {
    wordsUsed: number;
    setwordUsed: React.Dispatch<React.SetStateAction<number>>;
}

// Create the context with the defined interface
export const TotalUsageContext = createContext<TotalUsageContextType>({
    wordsUsed: 0, // Default value for wordsUsed
    setwordUsed: () => {}, // Default no-op function
});
