import React from "react";
import { Grid } from "semantic-ui-react";
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
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
  deleteActivity: (id: string) => void;
}

export const ActivityDashboard: React.FC<IProps> = ({
  activities,
  selectActivity,
  selectedActivity,
  editMode,
  setEditMode,
  closeForm,
  closeDetails,
  createActivity,
  editActivity,
  deleteActivity
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList
          activities={activities}
          selectActivity={selectActivity}
          deleteActivity={deleteActivity}
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
        {editMode && (
          <ActivityForm
            key={selectedActivity?.id || 0}
            closeForm={closeForm}
            activity={selectedActivity!}
            editActivity={editActivity}
            createActivity={createActivity}
          ></ActivityForm>
        )}
      </Grid.Column>
    </Grid>
  );
};
