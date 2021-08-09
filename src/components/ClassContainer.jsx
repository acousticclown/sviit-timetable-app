import React, { useState } from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import ClassCard from "./ClassCard";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { lectures } from "../data/lectures";
import getToday from "../helpers/weekDay";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 20,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

const ClassContainer = () => {
  const classes = useStyles();

  let today = getToday();

  const section = lectures.cse4e.name;

  let datas; // to store the lecture data
  let holiday; // to check this day is a holiday

  switch (today) {
    case "Monday":
      datas = lectures.cse4e.monday.data;
      holiday = lectures.cse4e.monday.holiday;
      break;
    case "Tuesday":
      datas = lectures.cse4e.tuesday.data;
      holiday = lectures.cse4e.tuesday.holiday;
      break;
    case "Wednesday":
      datas = lectures.cse4e.wednesday.data;
      holiday = lectures.cse4e.wednesday.holiday;
      break;
    case "Thursday":
      datas = lectures.cse4e.thursday.data;
      holiday = lectures.cse4e.thursday.holiday;
      break;
    case "Friday":
      datas = lectures.cse4e.friday.data;
      holiday = lectures.cse4e.friday.holiday;
      break;
    case "Saturday":
      datas = lectures.cse4e.saturday.data;
      holiday = lectures.cse4e.saturday.holiday;
      break;
    case "Sunday":
      datas = lectures.cse4e.sunday.data;
      holiday = lectures.cse4e.sunday.holiday;
      break;
    default:
      console.log("something went wrong");
  }

  return (
    <div>
      <Navbar day={today} section={section} />
      <Container className={classes.container}>
        {!holiday ? (
          datas.map((data, id) => (
            <ClassCard
              id={data.sid}
              key={id}
              name={data.name}
              start={data.start}
              end={data.end}
              subjectCode={data.code}
              teacher={data.teacher}
              link={data.link}
            />
          ))
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "80vh",
              width: "100vw",
            }}
          >
            <Typography>NO CLASS TODAY</Typography>
          </div>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default ClassContainer;
