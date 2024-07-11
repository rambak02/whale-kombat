import React, { createContext, ReactNode, useEffect, useState } from "react";
import { Friend} from "../components/models/response/FriendsRespons";
import FriendsService from "../components/service/FriendsService";
import { useLoadingContext } from "./hooks/useLoading";

interface FriendsContextProps {
    friends: Friend[] | null,
    setFriends: React.Dispatch<React.SetStateAction<Friend[] | null>>;
    fetchFriends: () => void;
}


export const FriendsContext = createContext<FriendsContextProps | null >(null)

export const FriendsProvider = ({
    children } : {children : ReactNode}) => {
        const [friends, setFriends] = useState<Friend[] | null>(null);
        const {incrementProgress} = useLoadingContext()
        const fetchFriends = async () => {
            try {
            const response = await FriendsService.getFriends()
            setFriends(response.data?.friends || [])
            incrementProgress();
        } catch (e) {
          console.error(e)
      }
    };
    useEffect(()=> {
        fetchFriends()

      }, [])
    return (
        <FriendsContext.Provider value = {{ friends, setFriends, fetchFriends }}>
            {children}
        </FriendsContext.Provider>
    )

    }