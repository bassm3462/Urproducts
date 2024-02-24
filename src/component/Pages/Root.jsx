import React, { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./Header/Header"
const drawerWidth = 240;
const Root = () => {
  return (
        <Box>
          <Outlet />
        </Box>
  );
};

export default Root;