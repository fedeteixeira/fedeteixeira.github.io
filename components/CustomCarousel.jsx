import { Grid, } from "@mui/material";
import React from "react";
import CustomMediaCard from "./CustomMediaCard";

export default function CustomCarousel() {
  const items = [
    {
      name: "React",
      description:
        "I have over 3 years of experience with React having built applications with Web3.0 functionalities like an NFT Marketplace, and fun fact: this page is built with React!",
      imageSrc: "/images/logos/react.jpg",
      imageAlt: "React Logo",
      backgroundColor: "#222222",
    },
    {
      name: "Vue",
      description:
        "I have over 3 years of experience with Vue having built components for videocall and chat sites.",
      imageSrc: "/images/logos/vue.jpg",
      imageAlt: "Vue Logo",
      backgroundColor: "#BFBFBF",
    },
    {
      name: "PHP",
      description:
        "I have over 3 years of experience with PHP mainly by using it with the Laravel framework.",
      imageSrc: "/images/logos/php.jpg",
      imageAlt: "PHP Logo",
      backgroundColor: "#4F5C93",
    },
    {
      name: "Laravel",
      description: "I have over 3 years of experience with Laravel.",
      imageSrc: "/images/logos/laravel.jpg",
      imageAlt: "Laravel Logo",
      backgroundColor: "white",
    },
    {
      name: "threejs",
      description:
        "I have over 2 years of experience with threejs, where I built an onboarding experience in VR for a bank and built components for a videocall site",
      imageSrc: "/images/logos/threejs.jpg",
      imageAlt: "threejs Logo",
      backgroundColor: "white",
    },
    {
      name: "Next.js",
      description:
        "I have built applications using Next.js like an NFT Marketplace and this page you're in!",
      imageSrc: "/images/logos/nextjs.jpg",
      imageAlt: "Next.js Logo",
      backgroundColor: "#1E272E",
    },
    {
      name: "Nuxtjs",
      description:
        "I have built applications using Nuxt.js with main focus on SSR",
      imageSrc: "/images/logos/nuxt.jpg",
      imageAlt: "Nuxtjs Logo",
      backgroundColor: "white",
    },
    {
      name: "django",
      description:
        "I have used django as a python framework for creating a website to find shops near you using an integration with the Google Maps API",
      imageSrc: "/images/logos/django.jpg",
      imageAlt: "django Logo",
      backgroundColor: "#092D1F",
    },
    {
      name: "Unity",
      description:
        "My experience with Unity was that I created an Unity WebGL site with videocall and chat functionalities",
      imageSrc: "/images/logos/unity.jpg",
      imageAlt: "Unity Logo",
      backgroundColor: "#01B0F1",
    },
    {
      name: "HTML CSS Javascript",
      description:
        "I have 4 years of experience with them and I have used them almost every time in the projects I've worked in",
      imageSrc: "/images/logos/javascript.jpg",
      imageAlt: "HTML, CSS and Javascript Logos",
      backgroundColor: "white",
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
