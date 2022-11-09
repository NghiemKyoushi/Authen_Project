import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const LayoutContainer = styled(Paper)(({ theme }) => ({
  border: "1px solid grey",
  height: "755px",
  maxWidth: 390,
  backgroundColor: "white",
  marginLeft: "10%",
}));

type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout(props: LayoutProps) {
  return (
    <>
      <Grid container>
        <Grid item={true} xs={4}></Grid>
        <Grid item={true} xs={4}>
          <LayoutContainer>{props.children}</LayoutContainer>
        </Grid>
        <Grid item={true} xs={4}></Grid>
      </Grid>
    </>
  );
}
