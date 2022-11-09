import { Box } from "@mui/system";
import Layout from './Layouts';
import { Button, styled, Typography } from "@mui/material";

const ButtonCustom = styled(Button)(({ theme }) => ({
  border: "1px solid black",
  backgroundColor: "white",
  color: "black",
  width: "94%",
  marginLeft: 3,
}));

export interface LoginProps{
  handleLogin: () => void;
}
export default function Login (props: LoginProps) {
  return(
    <Layout>
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 0,
        marginTop: 5,
      }}>
      <h2>Punchu</h2>
      <p>A fun investment to be together</p>
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
      <ButtonCustom>Get started with Google</ButtonCustom>
      <ButtonCustom onClick={() => props.handleLogin()}>
        Get started with FaceBook
      </ButtonCustom>
    </Box>
  </Layout>
  )     
}