import React from "react";
import { Grid, List } from "semantic-ui-react";
import { IActivity } from "../../../app/layout/models/activity";
import { ActivityList } from "./ActivityList";
import { ActivityDetails } from "../details/ActivityDetails";
import { ActivityForm } from "../form/ActivityForm";

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  selectedActivity: IActivity | null;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  closeForm: () => void;
  closeDetails: () => void;
}

export const ActivityDashboard: React.FC<IProps> = ({
  activities,
  selectActivity,
  selectedActivity,
  editMode,
  setEditMode,
  closeForm,
  closeDetails
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList
          activities={activities}
          selectActivity={selectActivity}
        ></ActivityList>
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedActivity && !editMode && (
          <ActivityDetails
            selectedActivity={selectedActivity}
            setEditMode={setEditMode}
            closeDetails={closeDetails}
          ></ActivityDetails>
        )}
        {editMode && <ActivityForm closeForm={closeForm}></ActivityForm>}
      </Grid.Column>
    </Grid>
  );
};
