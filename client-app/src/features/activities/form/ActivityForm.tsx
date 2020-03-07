import React, { useState } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { IActivity } from "../../../app/layout/models/activity";

interface IProps {
    closeForm: () => void;
    activity: IActivity
}

export const ActivityForm: React.FC<IProps> = ({closeForm, activity: initialFormState}) => {

  const initializeForm = () => {
    if (initialFormState) {
      return initialFormState;  
    } else {
      return {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
      };
    }
  }

  const [activity, setActivity] = useState<IActivity>(initializeForm);

  return (
    <Segment clearing>
      <Form>
        <Form.Input placeholder="Title" value={activity.title}></Form.Input>
        <Form.TextArea placeholder="Description" value={activity.description} rows={2}></Form.TextArea>
        <Form.Input placeholder="Category" value={activity.category}></Form.Input>
        <Form.Input type="date" value={activity.date}></Form.Input>
        <Form.Input placeholder="City" value={activity.city}></Form.Input>
        <Form.Input placeholder="Venue" value={activity.venue}></Form.Input>
        <Button
          floated="right"
          positive
          type="submit"
          content="Submit"
        ></Button>
        <Button onClick={closeForm} floated="right" type="button" content="Cancel"></Button>
      </Form>
    </Segment>
  );
};
