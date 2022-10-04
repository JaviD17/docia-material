import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export default function Layout(props) {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{
          py: 3,
          // position: 'relative'
        }}
      >
        {props.children}
      </Container>
    </>
  );
}
