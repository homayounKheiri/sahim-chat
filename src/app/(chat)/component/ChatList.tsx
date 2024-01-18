"use client"

import { useState } from "react";
import ChatItem from "./ChatItem";
import { Divider, Stack } from "@mui/material";

export default function ChatList() {

    const [chats, setChats] = useState([
        {
            title: "راننده 1",
            subtitle: "سلام . حرکت کردم"
        },
        {
            title: "راننده 1",
            subtitle: "سلام . حرکت کردم"
        },
        {
            title: "راننده 1",
            subtitle: "سلام . حرکت کردم"
        },
        {
            title: "راننده 1",
            subtitle: "سلام . حرکت کردم"
        },
        {
            title: "راننده 1",
            subtitle: "سلام . حرکت کردم"
        },
    ])
    
    return (
        <>
            <Stack direction={"column"}>
                {chats.map((item, index) => {
                    return (
                        <>
                            <ChatItem 
                                title={item.title}
                                subtitle={item.subtitle}
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