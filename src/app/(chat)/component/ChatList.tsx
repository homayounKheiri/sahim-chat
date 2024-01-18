"use client"

import { useState } from "react";
import ChatItem from "./ChatItem";
import { Divider, Stack } from "@mui/material";

export default function ChatList() {

    const [chats, setChats] = useState([
        {
            id: 1,
            title: "راننده 1",
            subtitle: "سلام . حرکت کردم"
        },
        {
            id: 2,
            title: "راننده 1",
            subtitle: "سلام . حرکت کردم"
        },
        {
            id: 3,
            title: "راننده 1",
            subtitle: "سلام . حرکت کردم"
        },
        {
            id: 4,
            title: "راننده 1",
            subtitle: "سلام . حرکت کردم"
        },
        {
            id: 5,
            title: "راننده 1",
            subtitle: "سلام . حرکت کردم"
        },
    ])
    
    return (
        <>
            <Stack direction={"column"} sx={{overflow: 'hidden'}}>
                {chats.map((item, index) => {
                    return (
                        <>
                            <ChatItem 
                                title={item.title}
                                subtitle={item.subtitle}
                                key={item.id}
                            >
                            </ChatItem>

                            {index < chats.length-1 && <Divider variant="middle"/>} 
                        </>                   
                    )
                })}
            </Stack>
        </>
    )
}