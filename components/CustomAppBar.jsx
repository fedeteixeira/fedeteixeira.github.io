import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useRouter, } from "next/router";
import { Avatar, } from "@mui/material";
import styles from "../styles/Home.module.css";

const pages = ["About Me", "Skills", "Contact",];

function CustomAppBar() {
  const router = useRouter();
  const { tab = "About Me", } = router.query;

  const setCurrentTab = (page,) => {
    router.push({
      pathname: "/",
      query: {
        tab: page,
      },
    },);
  };

  const navButtons = pages.map((page,) => (
    <Button
      key={page}
      onClick={() => {
        setCurrentTab(page,);
      }}
      sx={{
        my: { xs: 1, md: 2, },
        color: "white",
        display: "block",
        textTransform: "capitalize",
      }}
    >
      <Typography
        className={`${styles.tab}
                      ${
                        tab?.toLocaleLowerCase() === page.toLocaleLowerCase()
                          ? styles.active
                          : ""
                      }`}
      >
        {page}
      </Typography>
    </Button>
  ),);

  return (
    <AppBar
      position="fixed"
      color="secondary"
      sx={{ backgroundColor: "black", }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ justifyContent: { xs: "center", md: "unset", }, }}
        >
          <Box
            sx={{
              display: { xs: "flex", md: "none", },
              flexDirection: "column",
              pt: 1,
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: "Century Gothic",
                color: "inherit",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              <b>Fede</b>Teixeira
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "row", }}>
              {navButtons}
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex", },
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: "Century Gothic",
                color: "inherit",
                textDecoration: "none",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Avatar
                src="/apple-touch-icon.png"
                alt="Federico Profile Image"
                sx={{ mr: 3, }}
              />
              <b>Fede</b>Teixeira
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "flex-end",
                display: "flex",
                flexDirection: "row",
              }}
            >
              {navButtons}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default CustomAppBar;
