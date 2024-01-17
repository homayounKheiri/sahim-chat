"use client";

import { grey } from "@mui/material/colors";
import {
  alpha,
  getContrastRatio,
  ThemeOptions as MuiThemeOptions,
  PaletteOptions,
} from "@mui/material/styles";
// TODO: check this import
import type {} from "@mui/x-data-grid/themeAugmentation";

declare module "@mui/material/styles" {
  interface Palette {
    excelCustomColor: Palette["primary"];
  }

  interface PaletteOptions {
    excelCustomColor: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Fab" {
  interface FabPropsColorOverrides {
    excelCustomColor: true;
  }
}

const excelColorBase = "#147c46";
const excelColorMain = alpha(excelColorBase, 0.9);
const paletteColors: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#1F71BD",
    dark: "#030B13",
  },
  secondary: {
    main: "#FCA311",
  },
  success: {
    main: "#36B368",
    light: "#d2fbdf",
    dark: "#1f9c51",
    contrastText: "#6deaa6",
  },
  warning: {
    main: "#FCA311",
  },
  error: {
    main: "#FF7473",
    light: "#fde4e1",
    dark: "#ef4438",
    contrastText: "#fca39a",
  },
  excelCustomColor: {
    main: excelColorMain,
    light: alpha(excelColorBase, 0.5),
    dark: alpha(excelColorBase, 1),
    contrastText:
      getContrastRatio(excelColorMain, "#fff") > 4.5 ? "#fff" : "#111",
  },
};

const ThemeOptions: MuiThemeOptions = {
  direction: "rtl",
  palette: paletteColors,
  typography: {
    fontFamily: "var(--font-shabnam)",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "15px",
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 46,
          height: 26,
          padding: 0,
        },
        thumb: {
          boxSizing: "border-box",
          width: 22,
          height: 22,
          color: "#fff",
        },
        track: {
          borderRadius: 13,
          backgroundColor: "#E9E9EA",
          opacity: 1,
          transition: "background-color 300ms",
          ".Mui-checked.Mui-checked + &": {
            opacity: 1,
          },
        },
        switchBase: {
          padding: 0,
          margin: "2px",
          transitionDuration: "300ms",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "15px",
          boxShadow: "0px 0px 15px rgba(35, 35, 35, 0.1)",
          padding: "15px",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: ({ theme }) => ({
          direction: "ltr",
          marginTop: "10px",
          "& .Mui-selected": {
            color: "white !important",
            backgroundColor: `${theme.palette.secondary.main} !important`,
          },
        }),
        ul: {
          justifyContent: "center",
          "& .MuiPaginationItem-root": {
            borderRadius: "12px",
            background: grey[200],
            border: "0px",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderRadius: "15px",
            "& legend": {
              display: "none",
            },
          },
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: (props) => ({
          marginTop: props.ownerState.label ? "40px" : "0px",
          "& .MuiFormLabel-root": {
            top: "-20px",
            fontSize: "22px",
          },
          "& .MuiFormLabel-shrink": {
            shrink: true,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            top: "2px",
          },
          shrink: true,
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          "& .MuiChip-label": {
            maxWidth: "70px",
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          overflowX: "auto",
          ".MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            background: "#f1f1f1",
          },
          ".MuiTablePagination-root": {
            direction: "rtl",
          },
          ".MuiTablePagination-displayedRows": {
            direction: "ltr",
          },
          "& .MuiTablePagination-actions": {
            display: "none",
          },
          ".MuiDataGrid-columnHeadersInner": {
            bgcolor: "#fcfcfc",
          },
          ".MuiInputBase-root": {
            margin: "4px",
          },
          "& .MuiDataGrid-columnsContainer": {
            direction: "ltr",
          },
          "& .MuiDataGrid-virtualScroller": {
            direction: "ltr",
          },
          "& .even.MuiDataGrid-row": {
            background: "#f9f9f9",
          },
          "& .MuiDataGrid-row:hover": {
            background: "#ecefff",
          },
          "& .MuiTablePagination-selectLabel": {
            direction: "ltr",
          },
          border: "none",
        },
        filterForm: {
          "& .MuiTextField-root": {
            marginTop: "0px",
          },
          "& .MuiFormLabel-root": {
            top: "0px",
            fontSize: "1rem",
          },
        },
        footerContainer: {
          ".MuiToolbar-root": {
            // direction: "rtl",
            display: "flex",
            flexDirection: "row-reverse",
          },
        },
      },
    },
    // StripedDataGrid: StripedDataGrid,
  },

  // StripedDataGrid: StripedDataGrid,
};

export default ThemeOptions;
