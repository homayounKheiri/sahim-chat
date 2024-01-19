"use client"

import { Box, Button, IconButton, Stack, TextField, Typography } from "@mui/material";
import MessageItem from "../component/MessageItem";
import { useState } from "react";
import { IconPaperclip, IconSend } from "@tabler/icons-react";

interface propsType {
    id: number,
    title: string
}

export default function chatPage(props: propsType) {
    const [messages, setMessages] = useState([
        {
            id: 1,
            img: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png",
            text: "لورم ایپسوم",
            person: 1,
            time: "12:45"
        },
        {
            id: 2,
            img: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png",
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
            person: 1,
            time: "15:30"
        },

        {
            id: 3,
            img: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png",
            text: "لورم ایپسوم",
            person: 1,
            time: "12:45"
        },
        {
            id: 4,
            img: "https://static.vecteezy.com/system/resources/previews/011/459/669/original/people-avatar-icon-png.png",
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
            person: 2,
            time: "15:30"
        },

        {
            id: 5,
            img: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png",
            text: "لورم ایپسوم",
            person: 1,
            time: "12:45"
        },
        {
            id: 6,
            img: "https://static.vecteezy.com/system/resources/previews/011/459/669/original/people-avatar-icon-png.png",
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
            person: 2,
            time: "15:30"
        },

        {
            id: 7,
            img: "https://static.vecteezy.com/system/resources/previews/011/459/669/original/people-avatar-icon-png.png",
            text: "لورم ایپسوم",
            person: 2,
            time: "12:45"
        },
        {
            id: 8,
            img: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png",
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
            person: 1,
            time: "15:30"
        },

        {
            id: 9,
            img: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png",
            text: "لورم ایپسوم",
            person: 1,
            time: "12:45"
        },
        {
            id: 10,
            img: "https://static.vecteezy.com/system/resources/previews/011/459/669/original/people-avatar-icon-png.png",
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
            person: 2,
            time: "15:30"
        },

        {
            id: 11,
            img: "https://static.vecteezy.com/system/resources/previews/011/459/669/original/people-avatar-icon-png.png",
            text: "لورم ایپسوم",
            person: 2,
            time: "12:45"
        },
        {
            id: 12,
            img: "https://static.vecteezy.com/system/resources/previews/011/459/669/original/people-avatar-icon-png.png",
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
            person: 2,
            time: "15:30"
        },

        {
            id: 13,
            img: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png",
            text: "لورم ایپسوم",
            person: 1,
            time: "12:45"
        },
        {
            id: 14,
            img: "https://static.vecteezy.com/system/resources/previews/011/459/669/original/people-avatar-icon-png.png",
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
            person: 2,
            time: "15:30"
        },

    ])
    
    return (
        <Stack sx={{with: 1, height: 1, px: '30px'}} position={'relative'} justifyContent={"end"}>
            <Stack 
                sx={{
                    height: '70px',
                    position: 'absolute', 
                    top: 0, 
                    right: 0, 
                    left: 0, 
                    zIndex: 2, 
                    pl: '25px', 
                    bgcolor: 'white',
                    borderBottom: '1px solid #ccc'
                }}
                direction={'row'}
                alignItems={'center'}
            >
                <Typography fontSize={'1.4rem'} fontWeight={'bold'}>{props.title}</Typography>
            </Stack>

            <Stack
                overflow={"auto"} 
                direction={'column-reverse'}
                sx={{
                    pb: '16px',
                    pt: '80px',
                    '&::-webkit-scrollbar': {display: 'none'},
                }}>
                {messages.toReversed().map(msg => {
                    return (
                        <MessageItem
                            img={msg.img}
                            text={msg.text}
                            person={msg.person}
                            time={msg.time}
                            key={msg.id}
                        />
                    )
                })}
            </Stack>

            <Stack direction="column" sx={{border: 'solid 1px #aaa', borderRadius: '10px', p: '12px', mb: '18px', mx: '-10px'}}>
                <TextField
                    placeholder="بنویسید ..."
                    variant="standard"
                    multiline
                    maxRows={5}
                    InputProps={{
                        disableUnderline: true,
                    }}
                />

                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"end"}>
                    <Button variant="contained" sx={{bgcolor: 'primary.main', color: "white", mt: '30px'}}>
                        ارسال
                        <IconSend/>
                    </Button>

                    <IconButton
                        sx={{
                            width: '50px',
                            height: '50px'
                        }}
                    >
                        <IconPaperclip/>
                    </IconButton>
                </Stack>
            </Stack>
        </Stack>
    )
}