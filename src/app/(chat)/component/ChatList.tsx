"use client"

import { useState } from "react";
import ChatItem from "./ChatItem";
import { Box, Divider, InputAdornment, Stack, TextField } from "@mui/material";
import { IconSearch } from "@tabler/icons-react";

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
                <TextField
                    placeholder="جستجو"
                    variant="standard"
                    multiline
                    sx={{
                        bgcolor: '#ddd',
                        m: '14px',
                        p: '10px',
                        borderRadius: '10px'
                    }}
                    maxRows={5}
                    InputProps={{
                        disableUnderline: true,
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconSearch/>
                            </InputAdornment>
                        )
                    }}
                />
                {chats.map((item, index) => {
                    return (
                        <>
                            <Box sx={{p: '14px'}}>
                                <ChatItem 
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    key={item.id}
                                >
                                </ChatItem>
                            </Box>

                            {index < chats.length-1 && <Divider variant="middle"/>} 
                        </>                   
                    )
                })}
            </Stack>
        </>
    )
}