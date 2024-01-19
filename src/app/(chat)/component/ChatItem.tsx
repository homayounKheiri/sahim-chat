"use client"

import { Avatar, Button, Stack, Typography } from "@mui/material";
import { title } from "process";

interface propsType {
    title?: string,
    subtitle?: string,
    img? : string
}

export default function ChataItem(props : propsType) {
    return (
        <Button sx={{bgcolor: 'white', width: 1, padding: 0, borderRadius: 0, boxShadow: 'none'}}>
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