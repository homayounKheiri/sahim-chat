"use client"

import { Divider, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import ChatList from "./component/ChatList";
import ChatContextProvider from "./ContextProviders/ChatContext";
import { usePathname } from "next/navigation";

export default function chat({children} : {children: React.ReactNode}) {

    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

    const path = usePathname();
    
    return (
        <main>
            <ChatContextProvider>
                <Grid container sx={{width: 1, height: '100vh'}}>
                    {!(isSmall && path.split('/').pop()) && 
                        <Grid container item sm={5} lg={4} xl={3} sx={{height: 1, border: 'solid #ccc 1px'}}>
                            <ChatList></ChatList>
                        </Grid>
                    }

                    <Grid item sm={7} lg={8} xl={9} sx={{height: 1}}>
                        {children}
                    </Grid>

                </Grid>
            </ChatContextProvider>
        </main>
    )
}