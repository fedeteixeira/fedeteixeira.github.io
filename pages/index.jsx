import Head from "next/head";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Grid, } from "@mui/material";
import { useEffect, useRef, } from "react";
import { useRouter, } from "next/router";
import styles from "../styles/Home.module.css";
import CustomCarousel from "../components/CustomCarousel";
import CustomFooter from "../components/CustomFooter";

export default function Home() {
  const router = useRouter();
  const { tab = "About Me", } = router.query;

  const aboutMeRef = useRef(null,);
  const skillsRef = useRef(null,);
  const footerRef = useRef(null,);

  const refs = {
    "About Me": aboutMeRef,
    Skills: skillsRef,
    Contact: footerRef,
  };

  useEffect(() => {
    const refToScroll = refs[tab];
    refToScroll?.current?.scrollIntoView({ behavior: "smooth", },);
  }, [tab,],);

  return (
    <Box className={styles.container}>
      <Head>
        <title>Federico Teixeira - Fullstack Developer</title>
        <meta
          name="description"
          content="Federico Teixeira is a fullstack developer with over 3 years of experience"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className={styles.main}>
        <Box maxWidth="md">
          <Box ref={aboutMeRef} sx={{ mt: 3, }} className={styles.scrollElement}>
            <Typography variant="h1" className={styles.title}>
              <b>Federico</b> Teixeira
            </Typography>

            <Typography className={styles.caption}>
              Fullstack web developer
            </Typography>

            <Grid container maxWidth="md" sx={{ mt: 3, }}>
              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  sx={{ width: "250px", height: "250px", }}
                  src="https://avatars.githubusercontent.com/u/56057557?v=4"
                  alt="Federico Profile Image"
                  className={styles.avatar}
                />
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography
                  className={styles.description}
                  sx={{ textAlign: "justify", }}
                >
                  I am a full-stack web developer with over 3 years of
                  experience in the industry. I know functional programming,
                  object-oriented programming (OOP), and responsive design, and
                  I always care about accessibility.
                  <br />
                  <br />
                  I&apos;m a good team worker and I have excellent
                  problem-solving skills, where I always try to find a solution
                  to the issues I&apos;m presented with.
                  <br />
                  <br />
                  I&apos;m currently studying for a Computer Engineering degree
                  and I&apos;m expected to finish my career the next year.
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ mt: 5, }} ref={skillsRef} className={styles.scrollElement}>
            <Typography className={styles.title} variant="h2">
              Skills
            </Typography>
            <Box sx={{ mt: 3, }}>
              <CustomCarousel />
            </Box>
          </Box>
        </Box>
      </main>

      <footer className={styles.footer}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 3,
            width: "100%",
          }}
          ref={footerRef}
          className={styles.scrollElement}
          maxWidth="xl"
        >
          <CustomFooter />
        </Box>
      </footer>
    </Box>
  );
}
