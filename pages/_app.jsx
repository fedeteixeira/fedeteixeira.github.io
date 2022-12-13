import CustomAppBar from "../components/CustomAppBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps, },) {
  return (
    <>
      <CustomAppBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
