"use client"

import { useState } from "react";
import ChatItem from "./ChatItem";
import { Box, Divider, InputAdornment, Stack, TextField } from "@mui/material";
import { IconSearch } from "@tabler/icons-react";

export default function ChatList() {

    const [chats, setChats] = useState([
        {
            id: '1',
            title: "راننده 1",
            subtitle: "سلام . حرکت کردم و توراهم . اگه چیزی نیازه بگو سر راه بگیرم بیارم. اگه هم نه که التماس دعا"
        },
        {
            id: '2',
            title: "راننده 2",
            subtitle: "سلام . حرکت کردم"
        },
        {
            id: '3',
            title: "راننده 3",
            subtitle: "سلام . حرکت کردم"
        },
        {
            id: '4',
            title: "راننده 4",
            subtitle: "سلام . حرکت کردم"
        },
        {
            id: '5',
            title: "راننده 5",
            subtitle: "سلام . حرکت کردم"
        },

        {
            id: '6',
            title: "راننده 6",
            subtitle: "سلام . حرکت کردم"
        },
        {
            id: '7',
            title: "راننده 7",
            subtitle: "سلام . حرکت کردم"
        },
        {
            id: '8',
            title: "راننده 8",
            subtitle: "سلام . حرکت کردم"
        },
        {
            id: '9',
            title: "راننده 9",
            subtitle: "سلام . حرکت کردم"
        },

        {
            id: '10',
            title: "راننده 10",
            subtitle: "سلام . حرکت کردم"
        },
    ])
    
    return (
        <>
            <Stack direction={"column"} sx={{overflow: 'hidden', height: 1}}>
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
                <Stack 
                    direction={'column'} 
                    sx={{
                        overflow: 'auto',
                        '&::-webkit-scrollbar': {display: 'none'},
                    }}
                >
                    {chats.map((item, index) => {
                        return (
                            <Box key={item.id}>
                                <ChatItem 
                                    id={item.id}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    img={''}
                                >
                                </ChatItem>

                                {index < chats.length-1 && <Divider variant="middle"/>} 
                            </Box>                   
                        )
                    })}
                </Stack>
            </Stack>
        </>
    )
}