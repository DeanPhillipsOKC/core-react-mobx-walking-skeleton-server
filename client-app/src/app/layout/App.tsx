import React, { useState, useEffect, Fragment } from "react";
import { Container } from "semantic-ui-react";
import { IActivity } from "./models/activity";
import { NavBar } from "../../features/nav/NavBar";
import { ActivityDashboard } from "../../features/activities/dashboard/ActivityDashboard";
import agent from "../api/agent";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(
    null
  );
  const [editMode, setEditMode] = useState(false);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find(a => a.id === id) ?? null);
    setEditMode(false);
  };

  const handleOpenCreateForm = () => {
    setSelectedActivity(null);
    setEditMode(true);
  }

  const handleCloseForm = () => {
    setEditMode(false);
  }

  const handleCloseDetails = () => {
    setSelectedActivity(null);
  }

  const handleCreateActivity = (activity: IActivity) => {
    setActivities([...activities, activity]);
    setSelectedActivity(activity);
    setEditMode(false);
  }

  const handleEditActivity = (activity: IActivity) => {
    setActivities([...activities.filter(a => a.id !== activity.id), activity]);
    setSelectedActivity(activity);
    setEditMode(false);
  }

  const handleDeleteActivity = (id: string) => {
    setActivities([...activities.filter(a => a.id !== id)]);
  }

  useEffect(() => {
    agent.Activities.list()
      .then(response => {
        let activities: IActivity[] = [];
        response.forEach(a => {
          a.date = a.date.split('.')[0];
          activities.push(a);
        })
        
        setActivities(activities);
      });
  }, []);

  return (
    <Fragment>
      <NavBar openCreateForm={handleOpenCreateForm}></NavBar>
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard
          activities={activities}
          selectActivity={handleSelectActivity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          setEditMode={setEditMode}
          closeForm={handleCloseForm}
          closeDetails={handleCloseDetails}
          createActivity={handleCreateActivity}
          editActivity={handleEditActivity}
          deleteActivity={handleDeleteActivity}
        ></ActivityDashboard>
      </Container>
    </Fragment>
  );
};

export default App;
