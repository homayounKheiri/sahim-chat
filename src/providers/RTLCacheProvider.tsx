"use client";

import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

// Create rtl cache
const cacheRtl = createCache({
  key: "mui-rtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function RTLCacheProvider({ children }: { children: React.ReactNode }) {
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}

export default RTLCacheProvider;

// "use client";

// import rtlPlugin from "stylis-plugin-rtl";
// import { CacheProvider } from "@emotion/react";
// import createCache from "@emotion/cache";
// import { prefixer } from "stylis";

// // Create rtl cache
// const cacheRtl = createCache({
//   key: "mui-rtl",
//   stylisPlugins: [prefixer, rtlPlugin],
// });

// const isBrowser = typeof document === "undefined";

// function RTLCacheProvider({ children }: { children: React.ReactNode }) {
//   let insertionPoint;
//   if (isBrowser) {
//     console.log(111);

//     return <div>{children}</div>;
//   } else {
//     const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
//       'meta[name="emotion-insertion-point"]'
//     );
//     insertionPoint = emotionInsertionPoint ?? undefined;
//   }
//   return (
//     <CacheProvider
//       value={
//         isBrowser
//           ? cacheRtl
//           : createCache({
//               key: "mui-rtl",
//               stylisPlugins: [prefixer, rtlPlugin],
//               insertionPoint,
//             })
//       }
//     >
//       {children}
//     </CacheProvider>
//   );
// }

// export default RTLCacheProvider;
