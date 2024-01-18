"use client"

import { Avatar, Box, Stack, Typography } from "@mui/material"

interface propsType {
    img: string,
    text: string,
    time: string,
    person: number
}

export default function MessageItem(props: propsType) {
    return (
        <>
            {props.person === 1 && 
                <Stack direction={"row"} sx={{width: 1}} justifyContent={"start"}>
                    <Avatar sx={{width: '50px', height: '50px'}} src={props.img}></Avatar>

                    <Box
                        sx={{width: 0,
                            height: 0,
                            mt: '13px',
                            ml: '4px',
                            borderTop: '10px solid transparent',
                            borderRight: '10px solid',
                            borderBottom: '10px solid transparent',
                            borderRightColor: 'primary.main'
                        }}
                    />

                    <Stack direction={"column"} alignItems={"start"} sx={{ width: '70%' }}>
                        <Box sx={
                            {
                                borderRadius: '10px',
                                bgcolor: 'primary.main',
                                p: '12px', 
                                fontSize: '1.1rem', 
                                color: 'white', 
                                lineHeight: '30px',
                            }}>
                                <Typography sx={{ width: 1}}>{props.text}</Typography>
                        </Box>
                        <Typography color={'#555'} component="span">{props.time}</Typography>
                    </Stack>
                </Stack>
            }

            {props.person === 2 &&
                <Stack direction={"row"} sx={{width: 1}} justifyContent={"end"}>
                    <Stack direction={"column"} alignItems={"end"} sx={{ width: '70%' }}>
                        <Box sx={
                            {
                                borderRadius: '10px',
                                bgcolor: 'secondary.main',
                                p: '12px', 
                                fontSize: '1.1rem', 
                                color: 'white', 
                                lineHeight: '30px',
                            }}>
                                <Typography>{props.text}</Typography>
                        </Box>
                        <Typography color={'#555'} component="span">{props.time}</Typography>
                    </Stack>

                    <Box
                        sx={{width: 0,
                            height: 0,
                            mt: '13px',
                            mr: '4px',
                            borderTop: '10px solid transparent',
                            borderLeft: '10px solid',
                            borderBottom: '10px solid transparent',
                            borderLeftColor: 'secondary.main'
                        }}
                    />

                    <Avatar sx={{width: '50px', height: '50px'}} src={props.img}></Avatar>
                </Stack>
            }
        </>
    )
}