import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search/Search";
import { AuthContext } from "../../AuthContext";
import NavLinks from "./NavbarLinks/NavLinks";
import { Box, Grid, Stack } from "@mui/material";
import { theme } from "../../../theme";
import MenuDrawer from "../../MobileComponents/MenuDrawer";

function Navbar() {
  const { userInfo, handleChange } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Grid
        container
        direction={{ xs: "column", lg: "row" }}
        spacing={{ xs: 0.5 }}
        paddingX={{ xs: 1 }}
        py={1}
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Grid
          item
          lg={4}
          sx={{
            display: { xs: "block", lg: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center",gap:1 }}>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <MenuDrawer />
            </Box>
            <Link to="/" className="font-bold text-xl lg:text-2xl">
              Postgram
            </Link>
          </Box>
        </Grid>
        <Grid
          item
          lg={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Search />
        </Grid>
        <Grid
          item
          lg={4}
          sx={{
            display: { xs: "none", lg: "flex" },
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <NavLinks />
        </Grid>
      </Grid>
    </>
  );
}

export default Navbar;
