import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { white } from "@mui/material/colors";
import { Button, Nav } from "react-bootstrap";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import BtnsOtroMetodo from "./BtnsOtroMetodo";
import { BorderTopRounded, Margin } from "@mui/icons-material";


const drawerBleeding = 36;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: (theme.palette.mode = white),
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

function SwipeableEdgeDrawer(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
                overflow: "visible",
                width: "80%",
                margin: "0 auto",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
          },
        }}
      />

      <Button
        style={{
          marginTop: "10px",
          width: "100%",
          paddingLeft: "86px",
          paddingRight: "86px",
          fontSize: "small",
        }}
        variant="outline-dark"
        onClick={toggleDrawer(true)}
      >
        {"Otro método"}
      </Button>

      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Puller />
        <BtnsOtroMetodo />
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
