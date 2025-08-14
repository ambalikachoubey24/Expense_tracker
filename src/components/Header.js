import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
function MyHeader() {
  return (
    <Box
      sx={{
        flexDirection: "row",
        fontSize: "40px",
        display: "flex",
        fontWeight: 400,
        padding: "10px",
        height: "40px",
        alignItems: "center",
        backgroundColor: "grey",
        justifyContent: "space-between",
      }}
    >
      Hii User
      <Avatar
        alt="m"
        src="/download.png"
        sx={{
          height: "40px",
          width: "40px",
          borderStyle: "15px",
        }}
      />
    </Box>
  );
}
export default MyHeader;
