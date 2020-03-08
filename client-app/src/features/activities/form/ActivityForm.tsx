import React, { useState, ChangeEvent, FormEvent } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { IActivity } from "../../../app/layout/models/activity";

interface IProps {
  closeForm: () => void;
  activity: IActivity;
}

export const ActivityForm: React.FC<IProps> = ({
  closeForm,
  activity: initialFormState
}) => {
  const initializeForm = () => {
    if (initialFormState) {
      return initialFormState;
    } else {
      return {
        id: "",
        title: "",
        category: "",
        description: "",
        date: "",
        city: "",
        venue: ""
      };
    }
  };

  const [activity, setActivity] = useState<IActivity>(initializeForm);

  const handleInputChange = (event: FormEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setActivity({ ...activity, [name]: value });
  };

  const handleSubmit = () => {
    console.log(activity);
  }

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          placeholder="Title"
          name="title"
          onChange={handleInputChange}
          value={activity.title}
        ></Form.Input>
        <Form.TextArea
          placeholder="Description"
          name='description'
          onChange={handleInputChange}
          value={activity.description}
          rows={2}
        ></Form.TextArea>
        <Form.Input
          placeholder="Category"
          name="category"
          onChange={handleInputChange}
          value={activity.category}
        ></Form.Input>
        <Form.Input
          type="date"
          name="date"
          onChange={handleInputChange}
          value={activity.date}
        ></Form.Input>
        <Form.Input
          placeholder="City"
          name="city"
          onChange={handleInputChange}
          value={activity.city}
        ></Form.Input>
        <Form.Input
          placeholder="Venue"
          name="venue"
          onChange={handleInputChange}
          value={activity.venue}
        ></Form.Input>
        <Button
          floated="right"
          positive
          type="submit"
          content="Submit"
        ></Button>
        <Button
          onClick={closeForm}
          floated="right"
          type="button"
          content="Cancel"
        ></Button>
      </Form>
    </Segment>
  );
};
