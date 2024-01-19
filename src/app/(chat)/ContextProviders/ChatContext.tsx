"use client"

import React, { createContext, useState } from "react"

interface valuesType {
    id: string,
    title: string,
    setId: (id: string) => void,
    setTitle: (title: string) => void
}

export const ChatContext = createContext<valuesType | undefined>(undefined)

export default function  ChatContextProvider({children} : {children: React.ReactNode}) {

    const [id, setId] = useState('');
    const [title, setTitle] = useState('')
    
    let value : valuesType = {
        id : id,
        title: title,
        setId: (v: string) => {setId(v)},
        setTitle: (v: string) => {setTitle(v)},
    }

    return (
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    )
}