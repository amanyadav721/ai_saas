"use client"
import { useState } from "react";
import SearchSection from "./_components/SearchSection";
import Tempelate from "./_components/Template";

export default function Dashboard(){
    const [userSearchInput, setuserSearchInput] = useState<string>();

    return (
        <>
        <div>
            <SearchSection onSearhcInput={(value:string)=>setuserSearchInput(value)}/>
            <Tempelate userSearchInput={userSearchInput}/>
        </div>
        </>
    )
}