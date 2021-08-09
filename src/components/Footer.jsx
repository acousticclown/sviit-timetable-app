import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    height: 70,
    backgroundColor: "#f9f9f9",
    color: "#3f50b5",
  },
  textContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  innerText: {
    marginLeft: 8,
    marginRight: 4,
  },
  flex: {
    width: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    justifySelf: "flex-end",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.footer}>
      <Container maxWidth="md">
        <Toolbar className={classes.textContainer}>
          <Typography
            className={classes.mainText}
            variant="body1"
            color="inherit"
          >
            Made with ❤ by
          </Typography>
          <Typography>
            <a
              className={classes.innerText}
              href="https://linkedin.com/in/shivanshpratap"
              target="_blank"
            >
              Shivansh Pratap
            </a>
            <span>👦</span>
          </Typography>
          {/* <Typography className={classes.flex}>
            <a href="https://github.com/acousticclown">
              <GitHubIcon />
            </a>
          </Typography> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
