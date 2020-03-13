import React, { SyntheticEvent } from "react";
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
  deleteActivity: (e: SyntheticEvent<HTMLButtonElement>, id: string) => void;
  submitting: boolean;
  target: string;
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
  deleteActivity,
  submitting,
  target
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList
          activities={activities}
          selectActivity={selectActivity}
          deleteActivity={deleteActivity}
          submitting={submitting}
          target={target}
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
            submitting={submitting}
          ></ActivityForm>
        )}
      </Grid.Column>
    </Grid>
  );
};
