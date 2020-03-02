import React, { useState, useEffect, Fragment, Component } from "react";
import axios from "axios";
import { Header, Icon, List, Container } from "semantic-ui-react";
import { IActivity } from "./models/activity";
import { NavBar } from "../../features/nav/NavBar";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then(response => {
        setActivities(response.data);
      });
  }, []);

  return (
    <Fragment>
      <NavBar></NavBar>
      <Container style={{marginTop: '7em'}}>
        <List>
          {activities.map(value => (
            <List.Item key={value.id}>{value.title}</List.Item>
          ))}{" "}
        </List>
      </Container>
    </Fragment>
  );
};

export default App;
