import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100vw",
        height: "80px",
        zIndex: "100",
        backdropFilter: "blur(5px)",
      }}
    >
      <Container
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "28px",
            paddingLeft: "10px",
            paddingRight: "10px",
            background: "#FF8000",
            color: "#000000",
            fontWeight: "900",
          }}
        >
          U.S.DEBT
        </Typography>
        <Box
          gap={"10px"}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              background: "#FF8000",
              color: "#000000",
              fontSize: "14px",
              textTransform: "none",
              ":hover": { background: "#FF8000" },
            }}
          >
            Sign
          </Button>
          <Button
            sx={{
              background: "#FF8000",
              color: "#000000",
              fontSize: "14px",
              textTransform: "none",
              ":hover": { background: "#FF8000" },
            }}
          >
            Connect Wallet
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
