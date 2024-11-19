import { createContext } from "react";

interface UpdateUsageContextType {
    updateUsage: boolean;
    setupdateUsage: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UpdateUsageContext = createContext<UpdateUsageContextType>({
    updateUsage: true, // Default value
    setupdateUsage: () => {}, // Default function, replaced in the provider
});
