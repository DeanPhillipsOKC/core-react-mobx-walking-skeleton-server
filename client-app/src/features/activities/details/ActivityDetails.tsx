import React from "react";
import { Card, Image, Icon, Button } from "semantic-ui-react";
import { IActivity } from "../../../app/layout/models/activity";

interface IProps {
  selectedActivity: IActivity;
  setEditMode: (editMode: boolean) => void;
  closeDetails: () => void;
}

export const ActivityDetails: React.FC<IProps> = ({
  selectedActivity,
  setEditMode,
  closeDetails
}) => {
  return (
    <Card>
      <Image
        src={`/assets/categoryImages/${selectedActivity.category}.jpg`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{selectedActivity.title}</Card.Header>
        <Card.Meta>
          <span className="date">{selectedActivity.date}</span>
        </Card.Meta>
        <Card.Description>{selectedActivity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            onClick={() => setEditMode(true)}
            basic
            color="blue"
            content="Edit"
          ></Button>
          <Button
            onClick={closeDetails}
            basic
            color="grey"
            content="Cancel"
          ></Button>
        </Button.Group>
      </Card.Content>
    </Card>
  );
};
