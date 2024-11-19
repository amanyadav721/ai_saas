import { createContext } from "react";

interface UserSubscriptionContextType {
    userSubscription: boolean;
    setUserSubscription: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserSubscriptionContext = createContext<UserSubscriptionContextType>({
    userSubscription: false,
    setUserSubscription: () => {},
});