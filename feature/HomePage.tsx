import Layout from "./Layouts";
import { Box } from "@mui/system";
import { Button, styled } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ButtonCustom = styled(Button)(({ theme }) => ({
  border: "1px solid black",
  backgroundColor: "white",
  color: "black",
  width: "94%",
  marginLeft: 3,
}));

type HomePageProps = {
  userInform: object;
};
export default function HomePage(props: HomePageProps) {
  const router = useRouter();
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
  const logout = () => {
    localStorage.removeItem("TOKEN");
    router.push("/login");
  };
  return (
    <Layout>
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 0,
          marginTop: 5,
        }}
      >
        <h2>Home Page</h2>
        <p>A fun investment to be together</p>
        <h3>Hello {props?.userInform?.name}</h3>
      </Box>
      <Box
        component="div"
        sx={{
          marginTop: 57,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 1,
        }}>
        <ButtonCustom onClick={() => logout()}>Logout</ButtonCustom>
      </Box>
    </Layout>
  );
}
