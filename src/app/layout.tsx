"use client";

import "./globals.css";

// import { Toaster } from "react-hot-toast";
import shabnam from "@/utils/shabnam";
// import ReduxProvider from "@/redux/ReduxProvider";
// import ReactQueryProvider from "@/providers/ReactQueryProvider";
import RTLCacheProvider from "@/providers/RTLCacheProvider";
import CustomThemeProvider from "@/providers/CustomThemeProvider";
import JalaliLocalizationProvider from "@/providers/JalaliLocalizationProvider";

/**
 * Render the root layout component.
 *
 * @param {Object} props - The properties of the component.
 * @param {React.ReactNode} props.children - The children of the component.
 * @return {React.ReactElement} The rendered root layout.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html
      className={shabnam.className}
      dir="rtl"
      lang="fa"
    >
      <RTLCacheProvider>
        <CustomThemeProvider>
          {/* <ReactQueryProvider> */}
            <JalaliLocalizationProvider>
              {/* <ReduxProvider> */}
                <body>
                  {children}
                  {/* <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                  /> */}
                </body>
              {/* </ReduxProvider> */}
            </JalaliLocalizationProvider>
          {/* </ReactQueryProvider> */}
        </CustomThemeProvider>
      </RTLCacheProvider>
    </html>
  );
}