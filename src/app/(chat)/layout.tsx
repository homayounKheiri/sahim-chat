"use client"

import { Divider, Grid } from "@mui/material";
import React from "react";
import ChatList from "./component/ChatList";

export default function chat({children} : {children: React.ReactNode}) {
    return (
        <main>
            <Grid container sx={{width: 1, height: '100vh'}}>
                <Grid item xs={5} lg={4} xl={3} sx={{height: 1, border: 'solid #ccc 1px'}}>
                    <ChatList></ChatList>

                </Grid>

                <Grid item xs={7} lg={8} xl={9} sx={{height: 1}}>
                    {children}
                </Grid>
            </Grid>
        </main>
    )
}