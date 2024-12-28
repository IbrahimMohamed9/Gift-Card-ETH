import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "purple" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            GiftCard Shop
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings"> */}
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}