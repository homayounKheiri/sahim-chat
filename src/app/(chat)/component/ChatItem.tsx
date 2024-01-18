"use client"

import { Avatar, Stack, TextField, Typography } from "@mui/material";
import { title } from "process";

interface propsType {
    title?: string,
    subtitle?: string,
    img? : string
}

export default function ChataItem(props : propsType) {
    return (
        <Stack direction={"row"} alignItems={'center'} sx={{p: '14px', '&:hover': {bgcolor: '#eee'}}}>
            <Avatar sx={{width: '55px', height: '55px'}}></Avatar>

            <Stack direction={"column"} sx={{ml: '8px'}}>
                <Typography sx={{mb: '4px', }} variant="subtitle1" fontWeight={'bold'}>{props.title}</Typography>
                <Typography variant="body2" color={'#444'}>{props.subtitle}</Typography>
            </Stack>
        </Stack>
    )
}