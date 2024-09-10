import { Grid } from "@mui/material";
import React from "react";
import Navbar from "../components/Home/Navbar/Navbar";
import PostContainer from "../components/Home/HomePosts/PostContainer";

const Home = () => {
  return (
    <Grid container direction={"column"}>
      {/* Navbar */}
      <Grid item>
        <Navbar />
      </Grid>

      {/* Main content area */}
      <Grid container>
        {/* Left Sidebar */}
        <Grid
          item
          lg={4}
          display={{ xs: "none", lg: "flex" }}
          justifyContent={"center"}
        >
          <div
            style={{
              position: "fixed",
              top: "64px", // Adjust based on your Navbar height
              bottom: 0,
              width: "33%", // Ensures it takes up 1/3 of the screen width
              overflowY: "auto", // Allows the sidebar content to be scrollable if needed
            }}
          >
            leftsidebar
          </div>
        </Grid>

        {/* Main Content (PostContainer) */}
        <Grid
          item
          xs={12}
          lg={4}
          sx={{
            marginLeft: { lg: "33%" }, // Ensure space for the left sidebar on large screens
            marginRight: { lg: "33%" }, // Ensure space for the right sidebar on large screens
            padding: 2, // Adds some padding for better spacing
          }}
        >
          <PostContainer />
        </Grid>

        {/* Right Sidebar */}
        <Grid
          item
          lg={4}
          display={{ xs: "none", lg: "flex" }}
          justifyContent={"center"}
        >
          <div
            style={{
              position: "fixed",
              top: "64px", // Adjust based on your Navbar height
              right: 0,
              bottom:0,
              width: "33%",
              overflowY: "auto", // Allows the sidebar content to be scrollable if needed
            }}
          >
            rightbar
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
