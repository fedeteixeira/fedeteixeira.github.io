import { Grid, } from "@mui/material";
import React from "react";
import CustomMediaCard from "./CustomMediaCard";

export default function CustomCarousel() {
  const items = [
    {
      name: "React",
      description:
        "I have over 3 years of experience with React having built applications with Web3.0 functionalities like an NFT Marketplace, and fun fact: this page is built with React!",
      imageSrc: "https://reactjs.org/logo-og.png",
      imageAlt: "React Logo",
    },
    {
      name: "Vue",
      description:
        "I have over 3 years of experience with Vue having built components for videocall and chat sites.",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
      imageAlt: "Vue Logo",
    },
    {
      name: "PHP",
      description:
        "I have over 3 years of experience with PHP mainly by using it with the Laravel framework.",
      imageSrc: "https://www.php.net/images/meta-image.png",
      imageAlt: "PHP Logo",
    },
    {
      name: "Laravel",
      description: "I have over 3 years of experience with Laravel.",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
      imageAlt: "Laravel Logo",
    },
    {
      name: "threejs",
      description:
        "I have over 2 years of experience with threejs, where I built an onboarding experience in VR for a bank and built components for a videocall site",
      imageSrc: "https://i.imgur.com/ygvUXeo.png",
      imageAlt: "threejs Logo",
    },
    {
      name: "Next.js",
      description:
        "I have built applications using Next.js like an NFT Marketplace and this page you're in!",
      imageSrc:
        "https://miro.medium.com/max/1400/1*2tmzU7bve-VlTkOMWsk_Hw.jpeg",
      imageAlt: "Next.js Logo",
    },
    {
      name: "Nuxtjs",
      description:
        "I have built applications using Nuxt.js with main focus on SSR",
      imageSrc:
        "https://kinsta.com/wp-content/uploads/2022/05/nuxt-js-logo.jpeg",
      imageAlt: "Nuxtjs Logo",
    },
    {
      name: "django",
      description:
        "I have used django as a python framework for creating a website to find shops near you using an integration with the Google Maps API",
      imageSrc:
        "https://www.codigojs.com/media/thumbs/articles/2020/03/08/1_HVKOLLX7wprRbHTl2IPDcQ.png.800x600_q90.jpg",
      imageAlt: "django Logo",
    },
    {
      name: "Unity",
      description:
        "My experience with Unity was that I created a WebGL site with videocall and chat functionalities",
      imageSrc: "https://unity.com/logo-unity-web.png",
      imageAlt: "Unity Logo",
    },
    {
      name: "HTML, CSS and Javascript",
      description:
        "I have 4 years of experience with them and being the basis for the web I have used them almost every time in the projects I've worked in",
      imageSrc:
        "http://www.cursosgis.com/wp-content/uploads/2017/06/lenguajes_1.png",
      imageAlt: "HTML, CSS and Javascript Logos",
    },
  ];

  return (
    <Grid container gap={2} sx={{ justifyContent: "center", }}>
      {items.map((item, i,) => (
        <Grid item xs={12} md={5} key={i}>
          <CustomMediaCard item={item} />
        </Grid>
      ),)}
    </Grid>
  );
}
