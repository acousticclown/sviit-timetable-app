import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  makeStyles,
  CardHeader,
  CardMedia,
  Typography,
  Box,
} from "@material-ui/core";
import formatDate, { formatNow } from "../helpers/currentTime";

const useStyles = makeStyles((theme) => ({
  box: {
    margin: 15,
    height: "100%",
  },
  root: {
    width: 300,
    height: 300,
  },
  header: {
    height: 40,
    backgroundColor: "#3f50b5",
    color: "#fff",
  },
  subColor: {
    color: "#fff",
    fontSize: 13,
  },
  subColorSml: {
    fontSize: 12,
  },
  avatar: {
    backgroundColor: "#f9f9f9",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  button: {
    width: "100%",
    height: "60px",
  },
  disabledButton: {
    backgroundColor: "#3f50b5",
  },
  arrow: {
    color: "#fff",
    "&:hover": {
      color: "#f00",
    },
  },
  link: {
    textDecoration: "none",
    width: "100%",
    height: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const ClassCard = ({ id, name, start, end, subjectCode, teacher, link }) => {
  const classes = useStyles();

  const [active, setActive] = useState(true);
  const [status, setStatus] = useState("ENTER CLASS");
  const [imageUrl, setImageUrl] = useState("");
  const [linkColor, setLinkColor] = useState("#fff");

  let [nowT] = formatNow();
  let [startTime, startT] = formatDate(start);
  let [endTime, endT] = formatDate(end);

  useEffect(() => {
    if (nowT < startT) {
      setStatus("NOT STARTED YET");
    } else if (nowT > endT) {
      setStatus("CLASS ENDED");
    } else {
      if (!link) {
        setStatus("NO LINK PROVIDED");
      }
      setActive(false);
    }

    if (active) {
      setLinkColor("#3f50b5");
    } else {
      setLinkColor("#fff");
    }

    switch (id) {
      case "i":
        setImageUrl(
          "https://images.idgesg.net/images/article/2019/02/iot_internet_of_things_by_jackie_niam_gettyimages-996958260_2400x1600-100788446-large.jpg"
        );
        break;
      case "h":
        setImageUrl(
          "https://mangalmay.org/blog/wp-content/uploads/2018/01/Ethics-and-Human-Values.jpg"
        );
        break;
      case "n":
        setImageUrl(
          "https://upload.wikimedia.org/wikipedia/commons/3/32/Mongo-db-logo.png"
        );
        break;
      case "c":
        setImageUrl("https://www.brainkart.com/media/subject/133.jpg");
        break;
      case "d":
        setImageUrl(
          "https://home.sophos.com/en-us/medialibrary/Microsites/Home/SecurityCenter/ai-article-pic8.jpg"
        );
        break;
      default:
        setImageUrl(
          "https://cdn.collegeraptor.com/wp/wp-content/uploads/2017/09/09204206/study-tips-e1580315200491.png"
        );
    }
  }, [active, start, end]);

  return (
    <Box boxShadow={3} className={classes.box}>
      <Card className={classes.root}>
        <CardHeader
          className={classes.header}
          title={
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography className={classes.subColor}>{name}</Typography>
              <Typography className={classes.subColorSml}>
                {startTime} - {endTime}
              </Typography>
            </div>
          }
          subheader={
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography className={classes.subColor}>
                {subjectCode}
              </Typography>
              <Typography className={classes.subColor}>{teacher}</Typography>
            </div>
          }
        />
        {imageUrl ? (
          <CardMedia className={classes.media} image={imageUrl} title={name} />
        ) : null}
        <Button
          className={classes.button}
          classes={{ disabled: classes.disabledButton }}
          variant="contained"
          color="primary"
          size="large"
          //   endIcon={<ArrowForwardIosIcon className={classes.arrow} />}
          disabled={active}
        >
          <a
            className={classes.link}
            style={{
              color: linkColor,
            }}
            href={link}
            target="_blank"
          >
            {status}
          </a>
        </Button>
      </Card>
    </Box>
  );
};

export default ClassCard;
