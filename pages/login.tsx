/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../feature/Layouts";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Login from "../feature/Login";
import { loginWithFacebook } from "../common";
export default function Home() {
  useEffect(() => {
    window.fbAsyncInit = function () {
      FB.init({
        appId: "5556830631091437", // App ID
        channelURL: "", // Channel File, not required so leave empty
        status: true, // check login status
        cookie: true, // enable cookies to allow the server to access the session
        oauth: true, // enable OAuth 2.0
        xfbml: false, // parse XFBML
      });
    };
  }, []);
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="text/javascript"
          src="//connect.facebook.net/en_US/all.js#xfbml=1&appId=YOUR_APP_ID"
          id="facebook-jssdk"
        ></script>
      </Head>
      <>
        <Login handleLogin={loginWithFacebook} />
      </>
    </div>
  );
}