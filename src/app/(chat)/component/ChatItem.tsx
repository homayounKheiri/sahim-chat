"use client"

import { Avatar, Button, Stack, Typography } from "@mui/material";
import { title } from "process";
import { useContext } from "react";
import { ChatContext } from "../ContextProviders/ChatContext";
import { usePathname, useRouter } from "next/navigation";

interface propsType {
    id: string,
    title: string,
    subtitle: string,
    img: string,
}


export default function ChataItem(props : propsType) {

    const chatContext = useContext(ChatContext);
    const router = useRouter(); 
    const path = usePathname().split('/').pop();

    const chatItemClick = () => {
        chatContext?.setId(props.id);
        chatContext?.setTitle(props.title)
        router.push('/'+props.id)
    }

    return (
        <Button 
            sx={{bgcolor: `${path == props.id ? '#76767626' : '#00000000'}`, 
                width: 1, padding: 0, borderRadius: 0, boxShadow: 'none'}}
            onClick={chatItemClick}
        >
            <Stack direction={"row"} alignItems={'center'} sx={{p: '14px', width: 1}} overflow={'hidden'}>
                <Avatar sx={{width: '55px', height: '55px'}}></Avatar>

                <Stack direction={"column"} sx={{ml: '8px', width: 1, overflow: 'hidden'}} alignItems={"start"}>
                    <Typography sx={{mb: '4px', }} variant="subtitle1" color={'black'} fontWeight={'bold'}>
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color={'#444'} width={1} textAlign={'start'} overflow={'hidden'} textOverflow={'ellipsis'} noWrap>
                        {props.subtitle}
                    </Typography>
                </Stack>
            </Stack>
        </Button>
        
    )
}