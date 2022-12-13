import { Box, Typography, } from "@mui/material";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "../styles/Home.module.css";

function CustomFooter() {
  const accounts = [
    {
      name: "Github",
      href: "https://github.com/fedeteixeira",
      icon: <GitHubIcon />,
    },

    {
      name: "Whatsapp",
      href: "https://wa.me/584248171746",
      icon: <WhatsAppIcon />,
    },

    {
      name: "Email",
      href: "mailto:fede150998@gmail.com",
      icon: <EmailIcon />,
    },

    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/federico-teixeira-garrido-228306155/",
      icon: <LinkedInIcon />,
    },
  ];

  return (
    <>
      <Typography variant="h4">Contact Me</Typography>
      <Box sx={{ display: "flex", mt: 3, }}>
        {accounts.map((account, i,) => (
          <Link href={account.href} key={i} className={styles.footerLinks}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {account.icon}
              <Typography variant="body2" sx={{ ml: 1, mr: 3, }}>
                {account.name}
              </Typography>
            </Box>
          </Link>
        ),)}
      </Box>
    </>
  );
}

export default CustomFooter;
