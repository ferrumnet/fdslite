import { styled } from "@mui/material/styles";
import { Button, Paper } from "@mui/material";
import { Box } from "@mui/system";
import imagen from "../assets/FerrumNetworkIso.png";

const FdsImg = styled("img")({
  width: 200,
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export default function FdsCard01() {
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        mt: 5,
        p: 1,
      }}
    >
      <FdsImg
        src={imagen}
      />
      <Box sx={{ flexGrow: 1 }}>
        <h2>Title Card 01</h2>
        <p>Ferrum Network is an interoperable L1 network, powered by a multichain messaging engine designed to communicate and connect with every blockchain,</p>
        <Button variant="contained" color="primary">BTN Component</Button>
      </Box>

    </Paper>
  );
}